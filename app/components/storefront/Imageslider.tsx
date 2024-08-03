"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Imageslider({ images }: { images: string[] }) {
  const [mainimageindex, setmainimageindex] = useState(0);
  const hadlenextimage = () => {
    setmainimageindex((previndex) => (previndex + 1) % images.length);
  };
  const handleprevimage = () => {
    setmainimageindex((previndex) =>
      previndex === 0 ? images.length - 1 : previndex - 1
    );
  };
  return (
    <>
      <div className=" mb-6 grid gap-6 md:gap-3 items-start ">
        <div className="   relative rounded-lg  overflow-hidden">
          <Image
            height={500}
            width={600}
            src={images[mainimageindex]}
            className=" object-center w-[600px] h-[500px] object-cover "
            alt="product image"
          />
          <div className=" absolute inset-0 flex items-center justify-between ">
            <Button
              onClick={handleprevimage}
              variant="ghost"
              className="hover:bg-transparent"
              size="lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={hadlenextimage}
              variant="ghost"
              className=" hover:bg-transparent "
              size="lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="flex  gap-2">
          {images.map((img:string, index) => (
            <div onClick={()=>setmainimageindex(index)}  key={img} className={cn( mainimageindex==index? "border-2 border-primary":"border-2 border-zinc-400", "rounded-lg overflow-hidden " )} >
              <Image
                className=" h-[100px] w-[100px]"
                height={100}
                width={100}
                src={img}
                alt="img"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
