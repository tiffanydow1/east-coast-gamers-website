import { NextRequest, NextResponse } from 'next/server';
// import { auth } from '@clerk/nextjs';

import { connectToDB } from '@/lib/mongoDB';
import Collection from '@/lib/models/Collections';
import Product from '@/lib/models/Product';

export const GET = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    await connectToDB();

    const url = new URL(req.url);
    const limitParam = url.searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;
    const admin = url.searchParams.get('admin');

    let collectionQuery;

    if (admin) {
      collectionQuery = Collection.findById(params.collectionId)
    } else {
      collectionQuery = Collection.findOne({ slug: params.collectionId })
    }

    const collection = await collectionQuery;

    if (!collection) {
      return new NextResponse(
        JSON.stringify({ message: 'Collection not found.' }),
        { status: 404 }
      );
    }

    const totalProductCount = await Product.countDocuments({ _id: { $in: collection.products } });

    await collection
      .populate({
        path: 'products',
        model: Product,
        options: limit !== undefined && !isNaN(limit) && limit > 0 ? { limit } : {}
      });

    if (limit !== undefined && !isNaN(limit) && limit > 0) {
      collectionQuery = collectionQuery.limit(limit);
    }

    return NextResponse.json(
      { collection, totalProductCount },
      { status: 200 }
    );
  } catch (err) {
    console.log('[collectionSlug_GET]', err);
    return new NextResponse('Internal error', { status: 500 });
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    // const { userId } = auth();

    // if (!userId) {
    //   return new NextResponse('Unauthorized', { status: 401 });
    // }

    await connectToDB();

    let collection = await Collection.findById(params.collectionId);

    if (!collection) {
      return new NextResponse('Collection not found', { status: 404 });
    }

    const { title, description, image } = await req.json();

    if (!title) {
      return new NextResponse('Title is required', { status: 400 });
    }

    const slug = title.toLowerCase().replace(/\s+/g, '-');

    collection.title = title;
    collection.description = description;
    collection.image = image;
    collection.slug = slug;

    collection = await collection.save();

    return NextResponse.json(collection, { status: 200 });
  } catch (err) {
    console.log('[collectionId_POST]', err);
    return new NextResponse('Internal error', { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { collectionId: string } }
) => {
  try {
    // const { userId } = auth();

    // if (!userId) {
    //   return new NextResponse('Unauthorized', { status: 401 });
    // }

    await connectToDB();

    await Collection.findByIdAndDelete(params.collectionId);

    await Product.updateMany(
      { collections: params.collectionId },
      { $pull: { collections: params.collectionId } }
    );

    return new NextResponse('Collection is deleted', { status: 200 });
  } catch (err) {
    console.log('[collectionId_DELETE]', err);
    return new NextResponse('Internal error', { status: 500 });
  }
};
