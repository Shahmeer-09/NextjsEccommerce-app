import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Dashbordstats from "../components/dashbord/Dashbordstats";
import { Recentsales } from "../components/dashbord/Recentsales";
import prisma from "../lib/db";
import {Chart} from "../components/dashbord/Chart";
import { unstable_noStore as noStore } from 'next/cache';
const getData = async () => {
 
  const current = new Date();
  const sevendays = new Date(current.setDate(current.getDate() - 7));
  const data = await prisma.order.groupBy({
    by: ["createdAt"],
    having: {
      createdAt: {
        gte: sevendays,
      },
    },
    _sum: {
      amount: true,
    },
  });
  return data.map((item:any) => ({
    date: new Intl.DateTimeFormat("en-US").format(item.createdAt),
    revenue: item._sum?.amount ? item._sum.amount / 100 : 0
  }));
};
export default async function dasbord() {
  noStore()
  const data = await getData();
  return (
    <>
      <Dashbordstats />
      <div className="grid gap-4 mt-10 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent trasactions from your store
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart data={data} />
          </CardContent>
        </Card>
        <Recentsales />
      </div>
    </>
  );
}
