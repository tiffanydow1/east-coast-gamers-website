// import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

import { connectToDB } from '@/lib/mongoDB';
import Product from '@/lib/models/Product';
import Collection from '@/lib/models/Collections';

export const POST = async (req: NextRequest) => {
  try {
    // const { userId } = auth();

    // if (!userId) {
    //   return new NextResponse('Unauthorized', { status: 401 });
    // }

    await connectToDB();

    const {
      title,
      description,
      media,
      category,
      collections,
      tags,
      sizes,
      colors,
      price
    } = await req.json();

    if (!title || !description || !media || !category || !price) {
      return new NextResponse('Not enough data to create a product', {
        status: 400,
      });
    }

    const newProduct = await Product.create({
      title,
      description,
      media,
      category,
      collections,
      tags,
      sizes,
      colors,
      price
    });

    await newProduct.save();

    if (collections) {
      for (const collectionSlug of collections) {
        const collection = await Collection.findOne(collectionSlug);
        if (collection) {
          collection.products.push(newProduct._id);
          await collection.save();
        }
      }
    }

    return NextResponse.json(newProduct, { status: 200 });
  } catch (err) {
    console.log('[products_POST]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

    const url = new URL(req.url);
    const category = url.searchParams.get('category');
    const tag = url.searchParams.get('tag');
    const limitParam = url.searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;

    const query: any = {};

    if (category) {
      query.category = category;
    }

    if (tag) {
      query.tags = tag
    }

    const totalCount = await Product.countDocuments(query);

    let productsQuery = Product.find(query)
      .sort({ createdAt: 'desc' })
      .populate({ path: 'collections', model: Collection });

    if (limit !== undefined && !isNaN(limit) && limit > 0) {
      productsQuery = productsQuery.limit(limit);
    }

    const products = await productsQuery;
    return NextResponse.json({ totalCount, products }, { status: 200 });
  } catch (err) {
    console.log('[products_GET]', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
};

export const dynamic = 'force-dynamic';
