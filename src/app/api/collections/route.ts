import { connectToDB } from '@/lib/mongoDB';
// import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

import Collection from '@/lib/models/Collections';
import Product from '@/lib/models/Product';
import { createSlug } from '@/lib/utils';

export const POST = async (req: NextRequest) => {
  try {
    // const { userId } = auth()

    // if (!userId) {
    //   return new NextResponse('Unauthorized', { status: 403 })
    // }

    await connectToDB()

    const { title, description, image } = await req.json()

    if (!title) {
      return new NextResponse('Title is required', { status: 400 })
    }

    const existingCollection = await Collection.findOne({ title })
    if (existingCollection) {
      return new NextResponse('Collection already exists', { status: 400 })
    }

    const slug = createSlug(title);

    const newCollection = await Collection.create({
      title,
      description,
      image,
      slug
    });

    await newCollection.save()

    return NextResponse.json(newCollection, { status: 200 })
  } catch (err) {
    console.log('[collections_POST]', err)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB()

    const url = new URL(req.url);
    const populateProducts = url.searchParams.get('populateProducts') === 'true';

    let collections;

    if (populateProducts) {
      collections = await Collection.find().populate({
        path: 'products',
        model: Product,
      }).sort({ createdAt: 'desc' })

    } else {
      collections = await Collection.find().sort({ createdAt: 'desc' })
    }

    return NextResponse.json(collections, { status: 200 })
  } catch (err) {
    console.log('[collections_GET', err)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
