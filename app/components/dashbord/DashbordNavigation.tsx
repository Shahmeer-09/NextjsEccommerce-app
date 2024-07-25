 "use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "Dashbord",
    path: "/dashbord",
  },
  {
    name: "Orders",
    path: "/dashbord/orders",
  },
  {
    name: "Products",
    path: "/dashbord/products",
  },
  {
    name: "Banner page",
    path: "/dashbord/banner",
  },
];

export function DashbordNavigation() {
  const pathname = usePathname();
  return (
    <>
      {Links.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className={cn(
            item.path === pathname
              ? "text-foreground"
              : "text-muted-foreground hover:text:muted-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
