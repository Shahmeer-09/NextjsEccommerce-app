"use server"
import { Cart } from "@/app/lib/interfaces";
import redis from "@/app/lib/redis";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("user is not authorized");
  }

  const { quantity, prodid } = await req.json()

  const cart: Cart | null = await redis.get(`cart-${user.id}`);

  if (cart && cart.items.length !== 0) {
    const mycart = cart;
    mycart.items = cart.items.map((item) => {
      if (item.id === prodid) {
        item.quantity = quantity;
      }
      return item;
    });
    await redis.set(`cart-${user.id}`, mycart);
     
    return NextResponse.json(
      { message: "Cart updated successfully" },
      { status: 200 }
    );
  } else {
   
    return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
  }
}
