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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, PlusCircle, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getBanner = async () => {
  const banner = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return banner;
};

export default async function Banner() {
    const data  = await getBanner()
   return (
    <>
      <div className="flex justify-end p-2">
        <Button asChild>
          <Link href={"/dashbord/banner/create"}>
            <PlusCircle className="h-3 w-3 mr-2" />
            Create banner
          </Link>
        </Button>
      </div>
      <Card className="  mt-7 ">
        <CardHeader>
          <CardTitle>Banner</CardTitle>
          <CardDescription>Manage yout banners</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title </TableHead>
                <TableHead className="text-right">Actoins</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
             {
                data && data.map(banner=>(
                    <TableRow>
                    <TableCell>
                      <Image src={banner.imageBanner} alt="banner" height={100} width={100} className="rounded-lg" />
                    </TableCell>
                    <TableCell>{banner.title}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className=" cursor-pointer " asChild>
                            <Link href={`/dashbord/banner/${banner.id}/delete`}>Delete</Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
             }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
