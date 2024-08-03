"use client"

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
 export interface prodprops {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
  };
}

export default function ProductCard({ item }: prodprops) {
  return (
    <div className="rounded-lg">
      <Carousel>
        <CarouselContent>
          {item.images.map((image:string, index) => (
            <CarouselItem key={image}>
              <div key={image} className="relative h-[330px]">
                <Image
                  src={image}
                  fill
                  alt="feaured product"
                  className="object-cover object-center rounded-lg h-full w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className="py-2 px-1 flex items-center  justify-between ">
        <p className="text-sm font-semibold">{item.name}</p>
        <p className=" text-xs px-2 py-1 ring-1 ring-inset ring-primary rounded-md text-primary inline-flex items-center bg-primary/15 in">
          ${item.price}
        </p>
      </div>
      <div className="px-1">
        <p className="text-xs tracking-tight line-clamp-2 text-zinc-800">
          {item.description}{" "}
        </p>
      </div>
      <Button className="mt-1 w-full" asChild>
        <Link href={`/product/${item.id}`}>Learn more!</Link>
      </Button>
    </div>
  );
}
