import Link from "next/link";

const links = [
  {
    id: "0",
    name: "Home",
    href: "/",
  },
  {
    id: "1",
    name: "All products",
    href: "/porducts/all",
  },
  {
    id: "2",
    name: "Men",
    href: "/porducts/men",
  },
  {
    id: "3",
    name: "Women",
    href: "/porducts/women",
  },
  {
    id: "4",
    name: "kids",
    href: "/porducts/kid",
  },
];

export default function Navlinks() {
  return (
    <div  className="hidden md:flex   items-center  ml-8 gap-x-3">
      {links.map((link) => (
        <Link className=" font-semibold "  key={link.id} href={link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
