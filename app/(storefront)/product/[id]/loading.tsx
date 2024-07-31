import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
    return(
        <div className= " grid grid-cols-1 md:grid-cols-2 sm:gap-x-20 md:gap-x-24 " >
            <div className="flex flex-col gap-y-2 ">
                <Skeleton className="h-[500px] w-[600px]" />
                <div className=  " grid  grid-cols-5   gap-x-2  ">
                    <Skeleton className=" h-[100px] w-[100px] " />
                    <Skeleton className=" h-[100px] w-[100px] " />
                    <Skeleton className=" h-[100px] w-[100px] " />
                    <Skeleton className=" h-[100px] w-[100px] " />
                    <Skeleton className=" h-[100px] w-[100px] " />
                </div>
            </div>
            <div className="flex flex-col gap-y-3 ">
                <Skeleton className="h-8 w-56" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className=" h-28  w-full " />
                <Skeleton className="  h-12  w-full " />
            </div>

        </div>
    )
}