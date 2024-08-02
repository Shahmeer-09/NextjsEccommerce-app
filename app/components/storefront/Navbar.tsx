import Link from "next/link";
import Navlinks from "./NavLinks";
import { ShoppingBag } from "lucide-react";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";
import { Cart } from "@/app/lib/interfaces";
import redis from "@/app/lib/redis";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const cart: Cart | null = await redis.get(`cart-${user?.id}`);
  const count = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) ?? 0;
  return (
    <nav className="  px-4 sm:px-6 lg:px-8 py-4 max-w-7xl  w-full flex justify-between items-center  px ">
      <div className="flex  items-center">
        <Link href={"/"}>
          <h1 className=" text-xl lg:text-3xl font-bold text-black  ">
            Shoe<span className="text-blue-500">Stop</span>
          </h1>
        </Link>
        <Navlinks />
      </div>
      <div className="flex items-center ">
        {user ? (
          <>
            <Link href={"/bag"} className="group  flex items-center p-2 mr-2 ">
              <ShoppingBag className=" group-hover:text-zinc-400 h-5 w-5" />
              <span className=" text-xs  ml-2 ">{count}</span>
            </Link>
            <UserDropdown
              name={user.given_name}
              email={user.email}
              image={
                user.picture ??
                `https://avatar.vercel.sh/${user.given_name?.slice(0, 3)}`
              }
            />
          </>
        ) : (
          <div className="flex gap-4">
            <Button
              asChild
              className=" hover:bg-blue-100 hover:bg-opacity-75 bg-blue-100 text-zinc-800"
            >
              <LoginLink>Login</LoginLink>
            </Button>
            <Button
              asChild
              className=" hover:bg-blue-100 hover:bg-opacity-75 bg-blue-100 text-zinc-800"
            >
              <RegisterLink>Make Account</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
