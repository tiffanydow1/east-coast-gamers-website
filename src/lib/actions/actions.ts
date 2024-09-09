import Customer from '../models/Customer';
import Order from '../models/Order';

import { connectToDB } from '../mongoDB';

export const getCollections = async (populateProducts = false) => {
  const queryParam = populateProducts ? '?populateProducts=true' : '';
  const collections = await fetch(`http://localhost:3000/api/collections${queryParam}`)
  return await collections.json()
}

export const getCollectionDetails = async (collectionId: string) => {
  console.log('inslide getcollectiondetails', collectionId);
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/collections/${collectionId}`)
  return await collection.json
}

export const getCollectionBySlug = async (slug: string, limit?: number) => {
  try {
    const limitQuery = limit ? `limit=${limit}` : '';
    const response = await fetch(`http://localhost:3000/api/collections/${slug}${limitQuery ? `?${limitQuery}` : ''}`);

    if (!response.ok) {
      throw new Error('Failed to fetch collections');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching collection:', err);
    throw err;
  }
}

export const getProducts = async (category = '', tag = '', limit?: number) => {
  const categoryQuery = category ? `category=${category}` : '';
  const tagQuery = tag ? `tag=${tag}` : '';
  const limitQuery = limit ? `limit=${limit}` : '';
  const query = [categoryQuery, tagQuery, limitQuery].filter(Boolean).join('&');

  const url = `http://localhost:3000/api/products${query ? `?${query}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getProductDetails = async (productId: string) => {
  const product = await fetch(`http://localhost:3000/api/products/${productId}`)
  return await product.json()
}

export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`)
  return await searchedProducts.json()
}

// export const getOrders = async (customerId: string) => {
//   const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`)
//   return await orders.json()
// }

export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`http://localhost:3000/api/products/${productId}/related`)
  return await relatedProducts.json()
}

export const getTotalSales = async () => {
  await connectToDB();
  const orders = await Order.find();
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);
  return { totalOrders, totalRevenue }
}

export const getTotalCustomers = async () => {
  await connectToDB();
  const customers = await Customer.find()
  const totalCustomers = customers.length;
  return totalCustomers;
}

export const getSalesPerMonth = async () => {
  await connectToDB();
  const orders = await Order.find();

  const salesPerMonth = orders.reduce((acc, order) => {
    const monthIndex = new Date(order.createdAt).getMonth();
    acc[monthIndex] = (acc[monthIndex] || 0) + order.totalAmount;
    return acc
  }, {})

  const graphData = Array.from({ length: 12}, (_, i) => {
    const month = new Intl.DateTimeFormat('en-CA', { month: 'short' }).format(new Date(0, i))
    return { name: month, sales: salesPerMonth[i] || 0 }
  })

  return graphData;
}
