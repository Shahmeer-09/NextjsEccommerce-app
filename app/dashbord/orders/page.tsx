import prisma from "@/app/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { unstable_noStore as noStore } from 'next/cache';
const getData = async () => {
  const data = await prisma.order.findMany({
    select: {
      id: true,
      status: true,
      amount: true,
      createdAt: true,
      owner: {
        select: {
          firstName: true,
          email: true,
        },
      },
    },
  });
  return data;
};
export default async function OrdersPage() {
  noStore()
  const data = await getData();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>orders</CardTitle>
          <CardDescription>Recent Orders from your store!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cutomer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
             {data?.map((item:any)=>(
              <TableRow key={item.id} >
              <TableCell>
                <p className="font-medium ">{item.owner?.firstName}</p>
                <p className="font-medium text-muted-foreground">
                   {item.owner?.email}
                </p>
              </TableCell>
              <TableCell>Order</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{new Intl.DateTimeFormat().format(item.createdAt)}</TableCell>
              <TableCell className="text-right">+${new Intl.NumberFormat("en-Us").format(item.amount/100)}</TableCell>
            </TableRow>
             ))}
              
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
