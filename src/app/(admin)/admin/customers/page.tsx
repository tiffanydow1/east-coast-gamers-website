import { DataTable } from '../components/DataTable/DataTable';
import { columns } from '../components/Customers/CustomerColumns';
import { Separator } from '@/components/ui/separator';
import { connectToDB } from '@/lib/mongoDB';
import Customer from '@/lib/models/Customer';

const Customers = async () => {
  await connectToDB()

  const customers = await Customer.find().sort({ createdAt: 'desc' })

  return (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Customers</p>
      <Separator className="bg-grey-1 my-5" />
      <DataTable columns={columns} data={customers} searchKey="name" />
    </div>
  )
}

export const dynamic = 'force-dynamic';

export default Customers;
