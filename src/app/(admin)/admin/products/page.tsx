'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

import { CollectionType } from '@/lib/types';
import Loader from '../components/Loader/Loader';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '../components/DataTable/DataTable';
import { columns } from "../components/Products/ProductColumns";

type ProductType = {
  _id: string;
  title: string;
  description: string;
  updatedAt: string;
  tags: string[];
  sizes: [];
  price: number,
  media: string[];
  createdAt: string;
  colors: string[];
  collections: CollectionType[];
  category: string;
}

type ProductsResponseType = {
  totalCount: number;
  products: ProductType[];
};

const Products = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProductsResponseType>({ totalCount: 0, products: []});

  const getProducts = async () => {
    try {
      const res = await fetch('/api/products', {
        method: 'GET',
      });
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      console.log('[products_GET]', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className='px-10 py-5'>
      <div className='flex items-center justify-between'>
        <p className='text-heading2-bold'>Products ({data.totalCount})</p>
        <Button
          className="bg-blue-1 text-white"
          onClick={() => router.push("/admin/products/new")}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Product
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={data.products} searchKey="title" />
    </div>
  );
};

export default Products;
