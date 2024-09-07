'use client'

import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  }
];
