import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, PlusIcon, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from 'next/cache';
 async function getProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
}
export default async function ProductsPage() {
  noStore()
  const productsfound = await getProducts();
  return (
    <>
      <div className="flex justify-end items-center gap-4">
        <Button asChild className="flex items-center gap-x-2">
          <Link href={"/dashbord/products/create"}>
            <PlusIcon className="h-4 w-4" />
            <span className="text-xs">Create product</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Maneg your products and see their sales performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsfound.length > 0 &&  productsfound.map((product) => (
                <TableRow key={product.id} >
                  <TableCell>
                    <Image
                      src={product.images[0]}
                      alt="prodcut image"
                      height={100}
                      width={100}

                    />
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.status}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat().format(product.createdAt)}
                  </TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger  asChild>
                        <Button variant="ghost" size="icon" >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className=" cursor-pointer " ><Link href={`/dashbord/products/${product.id}`}>Edit</Link></DropdownMenuItem>
                        <DropdownMenuItem className=" cursor-pointer " asChild ><Link href={`/dashbord/products/${product.id}/delete`}>Delete</Link></DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
