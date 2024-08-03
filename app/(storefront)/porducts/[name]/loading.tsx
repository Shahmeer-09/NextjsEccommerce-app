import { Skeleton } from "@/components/ui/skeleton";
import { Categoryloading } from "./page";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
         <Skeleton className=" h-8 w-56 " />
        <div className="mt-6  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 lg:gap-8">
          <Categoryloading/>
         
        </div>
        </>
    )
  }