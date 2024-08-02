import prisma from "@/app/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingCart, User2 } from "lucide-react";
const getData = async () => {
    const [ users ,product, order ] =  await Promise.all([
        prisma.user.findMany(),
        prisma.product.findMany(),
        prisma.order.findMany({
            select: {
              amount: true,
            },
          }),
    ]);

  return { users , product, order };
};
export default async function Dashbordstats() {
  const data = await getData();
  const Revenue = data.order.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <div className=" grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4  ">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between  ">
          <CardTitle>Total Revenues</CardTitle>
          <DollarSign className="text-green-500 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl  font-bold">
            ${new Intl.NumberFormat().format(Revenue / 100)}
          </p>
          <p className="text-muted-foreground text-xs">Based on 100 charges</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between  ">
          <CardTitle>Total Sales</CardTitle>
          <ShoppingCart className="text-blue-500 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl  font-bold">+{data.order.length}</p>
          <p className="text-muted-foreground text-xs">
            Total sales on shoestop
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between  ">
          <CardTitle>Total Products</CardTitle>
          <PartyPopper className="text-purple-500 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl  font-bold">{data.product.length}</p>
          <p className="text-muted-foreground text-xs">
            Total products created
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between  ">
          <CardTitle>Total Users</CardTitle>
          <User2 className="text-red-500 h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl  font-bold">{data.users.length}</p>
          <p className="text-muted-foreground text-xs">total users signed up</p>
        </CardContent>
      </Card>
    </div>
  );
}
