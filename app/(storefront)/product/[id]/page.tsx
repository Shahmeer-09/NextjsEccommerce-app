import { addItem } from "@/app/Actions";
import Featiredproducts from "@/app/components/storefront/Feturedproducts";
import Imageslider from "@/app/components/storefront/Imageslider";
import { Addtocartbtn } from "@/app/components/Submitbutton";
import prisma from "@/app/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { ShoppingBag, StarIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";

const getProduct = async (prid: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const data = await prisma.product.findUnique({
    where: {
      id: prid,
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      images: true,
    },
  });
  return data;
};

export default async function Product({ params }: { params: { id: string } }) {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await getProduct(params.id);
  return (
    <div>
      <div className=" grid md:grid-cols-2 grid-cols-1 sm:gap-x-20 md:gap-x-24  ">
        <Imageslider images={data?.images as string[]} />
        <div className="flex flex-col">
          <h1 className="text-xl md:text-3xl font-extrabold tracking-tighter">
            {data?.name}
          </h1>
          <p className="mt-2 font-bold text-muted-foreground text-2xl">
            ${data?.price}
          </p>
          <div className="flex gap-x-1">
            <StarIcon className=" mt-3 h-4 w-4 text-yellow-500 fill-yellow-500 " />
            <StarIcon className=" mt-3 h-4 w-4 text-yellow-500 fill-yellow-500 " />
            <StarIcon className=" mt-3 h-4 w-4 text-yellow-500 fill-yellow-500 " />
            <StarIcon className=" mt-3 h-4 w-4 text-yellow-500 fill-yellow-500 " />
            <StarIcon className=" mt-3 h-4 w-4 text-yellow-500 fill-yellow-500 " />
          </div>
          <p className="text-sm mt-2 text-muted-foreground">
            {data?.description}
          </p>
          <form action={addItem}>
            <input type="text" hidden name="prodid" value={data?.id} />
            {!user ? (
              <Button disabled={true} size="lg" className="w-full mt-4 ">
                Add to cart <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Addtocartbtn />
            )}
          </form>
        </div>
      </div>
      <Featiredproducts />
    </div>
  );
}
