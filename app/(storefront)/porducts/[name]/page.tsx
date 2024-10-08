import ProductCard from "@/app/components/storefront/ProductCard.";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from 'next/cache';
interface  datatype{
 
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
}[]

const getProducts = async (categ: string) => {
  switch (categ) {
    case "all": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          images: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return { title: "All producs", data: data };
    }
    case "men": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "men",
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          images: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return { title: "Men products", data: data };
    }
    case "women": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "women",
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          images: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return { title: "Women products", data: data };
    }

    case "kid": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "kid",
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          images: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return { title: "Kids products", data: data };
    }

    default:
      return notFound();
  }
};

export default async function Cateogory({
  params,
}: {
  params: { name: string };
}) {
  noStore()
  const { title, data } = await getProducts(params.name);
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <div className="mt-6  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-8 ">
        {data.map((data:datatype)=>(
          <ProductCard key={data.id} item={data} />
        ))}
      </div>
    </div>
  );
}


