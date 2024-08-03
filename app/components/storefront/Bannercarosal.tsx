import prisma from "@/app/lib/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { unstable_Control } from "@conform-to/react";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
const getbanner = async () => {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};
export default async function Bannercarosal() {
  unstable_noStore()
  const data = await getbanner();

  return (
    <Carousel>
      <CarouselContent>
        {data.map((item: any) => (
          <CarouselItem key={item.id} >
            <div className=" relative  h-[60vh] lg:h-[80vh] rounded-xl  ">
              <Image
                alt="Banner"
                className="h-full object-cover object-center  w-full rounded-xl  "
                fill
                src={item.imageBanner}
                sizes=""
              />
              <div className="p-4 hover:scale-105 transition-transform bg-zinc-800 rounded-xl absolute top-5 left-5">
                <h1 className="font-bold  text-3xl  text-white rounded-xl ">
                  {item.title}
                </h1>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" cursor-pointer ml-[50px] absolute" />
      <CarouselNext className=" cursor-pointer mr-[50px] absolute" />
    </Carousel>
  );
}
