import { Skeleton } from "@/components/ui/skeleton"

export const Categoryloading=()=>{
    return(
      <div className="flex flex-col"  >
        <Skeleton  className="h-[330px] w-full"    />
        <div  className="flex flex-col gap-y-2 mt-2  " >
          <Skeleton className="w-full h-4 " />
          <Skeleton className="w-full h-6"/>
          <Skeleton className="w-full h-10 mt-2 " />
        </div>
      </div>
    )
  }