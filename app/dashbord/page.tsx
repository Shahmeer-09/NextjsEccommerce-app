import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { DollarSign, PartyPopper, ShoppingCart, User2 } from "lucide-react";

export default function dasbord() {
  return (
    <>
      <div className=" grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4  ">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between  ">
            <CardTitle>Total Revenues</CardTitle>
            <DollarSign className="text-green-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl  font-bold">$100.00</p>
            <p className="text-muted-foreground text-xs">
              Based on 100 charges
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between  ">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingCart className="text-blue-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl  font-bold">+50</p>
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
            <p className="text-2xl  font-bold">37</p>
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
            <p className="text-2xl  font-bold">50</p>
            <p className="text-muted-foreground text-xs">
              total users signed up
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 mt-10 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent trasactions from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Avatar className=" hidden sm:flex h-9 w-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Dave gray</p>
                <p className="text-sm font-medium text-muted-foreground">dash@dash.com</p>
              </div>
              <p className="ml-auto font-medium">+$1.99</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className=" hidden sm:flex h-9 w-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Dave gray</p>
                <p className="text-sm font-medium text-muted-foreground">dash@dash.com</p>
              </div>
              <p className="ml-auto font-medium">+$1.99</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className=" hidden sm:flex h-9 w-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Dave gray</p>
                <p className="text-sm font-medium text-muted-foreground">dash@dash.com</p>
              </div>
              <p className="ml-auto font-medium">+$1.99</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className=" hidden sm:flex h-9 w-9">
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Dave gray</p>
                <p className="text-sm font-medium text-muted-foreground">dash@dash.com</p>
              </div>
              <p className="ml-auto font-medium">+$1.99</p>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </>
  );
}
