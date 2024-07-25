import { ReactNode } from "react";
import { DashbordNavigation } from "../components/dashbord//DashbordNavigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function dasbordlayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user?.email !== "shameersheikh420@gmail.com") {
    return redirect("/");
  }
  return (
    <div className=" flex flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ">
      <header className="sticky h-16 border-b flex justify-between items-center top-0 gap-4 bg-white">
        <nav className=" hidden font-medium md:flex md:gap-5 md:items-center md:flex-row md:text-sm lg:gap-6">
          <DashbordNavigation />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className=" shrink-0 md:hidden "
              variant="outline"
              size="icon"
            >
              <MenuIcon className="h-16" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <nav className=" grid gap-6 mt-5 text-lg font-semibold ">
              <DashbordNavigation />
            </nav>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className=" rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
              variant="ghost"
              size="icon"
            >
              <CircleUser className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="py-5">
        {children}
      </main>
    </div>
  );
}
