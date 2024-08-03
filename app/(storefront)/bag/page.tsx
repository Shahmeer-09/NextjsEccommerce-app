import { createOrder, DeleteItem } from "@/app/Actions";
import QuantityInput from "@/app/components/storefront/Bagquanity";
import { Checkoutbtn, Deletbutton } from "@/app/components/Submitbutton";
import { Cart } from "@/app/lib/interfaces";
import redis from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from 'next/cache';

export default async function Bag() {
  noStore()
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  const cart: Cart | null = await redis.get(`cart-${user.id}`);
  let total = 0;
  cart?.items?.forEach((item) => {
    total += item.price * item.quantity;
  });
  return (
    <div className=" min-h-[60vh]   max-w-2xl mx-auto  mt-10 ">
      {!cart|| cart?.items.length == 0 ? (
        <div className="min-h-[350px]  flex-col mb-4 rounded-lg border-dashed border-2 border-blue-200 flex items-center justify-center  ">
          <div className=" h-10 w-10 text-blue-600 " >
            <ShoppingBag  className="h-10 w-10" />
          </div>
          <div className="flex  items-center text-center gap-2 w-[50%] flex-col mt-3 " >
           <p className=" font-bold capitalize  text-lg  ">your cart is empty</p>
            <p  className=" text-xs text-muted-foreground " > No porducts to show pleas select some products and then checkout </p>
            <Button asChild size="sm" className="  w-28" >
              <Link href={'/'} >shop now</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mb-10 ">
          {cart?.items &&
            cart.items.map((item) => (
              <div key={item.id} className="flex mt-5 ">
                <div className="h-24 w-32 sm:w-32 sm:h-26 relative">
                  <Image
                    className="object-cover"
                    src={item?.images}
                    alt={item.name}
                    fill
                  />
                </div>
                <div className="flex ml-5  items-center  justify-between  w-full  ">
                  <p className=" font-medium text-sm sm:text-lg ">
                    {item.name}
                  </p>
                  <div className="flex flex-col h-full  justify-around ">
                    <div className="gap-2 text-sm flex ">
                      <QuantityInput
                        prodid={item.id}
                        quantity={item.quantity}
                      />
                      <span className="font-semibold">X </span>
                      <p className=" font-semibold" > ${item.price}</p>
                    </div>
                    <form action={DeleteItem} className=" text-end ">
                      <input type="text" hidden name="prodid" value={item.id} />
                     <Deletbutton/>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          <div className="flex justify-between mt-8 font-bold">
            <p className="text-lg" >Total</p>
            <p className="text-lg">${new Intl.NumberFormat("en-Us").format(total)}</p>
          </div>
          <form action={createOrder}>
             <Checkoutbtn/>
          </form>
       
        </div>
      )}
    </div>
  );
}
