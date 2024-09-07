'use client';

import { ColumnDef } from '@tanstack/react-table';
import Delete from '../Delete/Delete';
import Link from 'next/link';

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => (
      <Link
        href={`/admin/products/${row.original._id}`}
        className='hover:text-red-1'
      >
        {row.original.title}
      </Link>
    ),
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'collections',
    header: 'Collections',
    cell: ({ row }) => row.original.collections.map((collection) => collection.title).join(', ')
  },
  {
    accessorKey: 'price',
    header: 'Price ($)',
  },
  {
    id: 'actions',
    cell: ({ row }) => <Delete item='product' id={row.original._id} />,
  },
];
