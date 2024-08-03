import prisma from "@/app/lib/db";
import { string } from "zod";
import ProductCard from "./ProductCard.";
import { Suspense } from "react";
import Categoryloading from "./Loadingskeletons/CategoryLoading";


const getFeaturedProducts = async () => {
  const data = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured:true
      
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
    take: 3,
  });
  return data;
};

export default function Featiredproducts() {
  return(
    <>
    <Suspense fallback={<FeatureFallback/>} >
      <FeatureData/>
    </Suspense>
    </>
  )
}

  async function FeatureData(){
  const data = await getFeaturedProducts();
  return (
    <>
      <h2 className="text-2xl my-4 font-bold tracking-tight text-gray-900">
        Featured products
      </h2>
      <div className=" grid grid-cols-1 my-6  lg:grid-cols-3 sm:grid-cols-2 gap-4 ">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

const  FeatureFallback=async()=>{
  return (
   <div className="grid grid-cols-1 my-6  lg:grid-cols-3 sm:grid-cols-2 gap-4">
    <Categoryloading/>
    <Categoryloading/>
    <Categoryloading/>
   </div>
  )
}