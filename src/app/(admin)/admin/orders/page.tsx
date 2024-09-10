'use client'

import { DataTable } from '../components/DataTable/DataTable';
import Loader from '../components/Loader/Loader';
import { columns } from '../components/Orders/OrderColumns';
import { Separator } from '@/components/ui/separator';

import { useEffect, useState } from 'react';

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const apiUrl = process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}/api/orders`
    :  'http://localhost:3000/api/orders';

  const getOrders = async () => {
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      setOrders(data)
      setLoading(false)
    } catch (err) {
      console.log("[orders_GET", err)
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return loading ? <Loader /> : (
    <div className='px-10 py-5'>
      <p className='text-heading2-bold'>Orders</p>
      <Separator className='bg-grey-1 my-5'/>
      <DataTable columns={columns} data={orders} searchKey='_id' />
    </div>
  )
}

export default Orders;
