import Link from "next/link";
import Navlinks from "./NavLinks";
import { ShoppingBag } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
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
      <div className="flex items-center">
        {user ? <ShoppingBag /> : <p>not authenticated</p>}
      </div>
    </nav>
  );
}
