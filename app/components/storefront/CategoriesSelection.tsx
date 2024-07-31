import Image from "next/image";
import Link from "next/link";
import all from "../../../public/Categorieall.jpg";
import women from "../../../public/women.jpg";
import men from "../../../public/men.jpg";
export default function CategorySelection() {
  return (
    <>
      <div className=" pt-24 sm:pt-32 ">
        <div className="flex items-center justify-between">
          <h1 className=" text-2xl sm:text-xl font-extrabold tracking-tighter  ">
            Shop by Category
          </h1>
          <Link href="/products/all">
            <p className=" text-primary text-xs font-bold hover:text-primary/80 ">
              Shop by all products{" "}
            </p>
          </Link>
        </div>
      </div>

      <div className=" mt-10 mb-20 gap-y-6 lg:gap-8 sm:gap-x-6  grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 ">
        <div className="group aspect-w-2 aspect-h-1 sm:row-span-2 sm:aspect-w-1 rounded-lg overflow-hidden">
          <Image
            src={all}
            alt="all procuts"
            className=" object-cover object-center "
          />
          <div className=" bg-gradient-to-t from-black to-none opacity-45 "></div>
          <div className="p-6 text-white flex justify-end flex-col">
            <Link href={"/products/all"}>
              <h3 className="font-semibold">All products</h3>
              <p className="text-sm">shop now</p>
            </Link>
          </div>
        </div>
        <div className=" rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-w-2   overflow-hidden ">
          <Image
            src={women}
            alt="all procuts"
            className=" object-cover  object-bottom "
          />
          <div className=" bg-gradient-to-t from-black to-none opacity-45 "></div>
          <div className="p-6 text-white flex justify-end flex-col">
            <Link href={"/products/women"}>
              <h3 className="font-semibold">Women products</h3>
              <p className="text-sm">shop now</p>
            </Link>
          </div>
        </div>
        <div className=" rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-w-2   overflow-hidden ">
          <Image
            src={men}
            alt="all procuts"
            className=" object-cover  object-center "
          />
          <div className=" bg-gradient-to-t from-black to-none opacity-45 "></div>
          <div className="p-6 text-white flex justify-end flex-col">
            <Link href={"/products/men"}>
              <h3 className="font-semibold">Men products</h3>
              <p className="text-sm">shop now</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
