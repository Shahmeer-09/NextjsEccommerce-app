import { Loader2} from "lucide-react";

export default function Loading(){
    return (
        <div className="flex min-h-[60vh]  items-center justify-center">
             <Loader2 className="animate-spin h-20 w-20" />
        </div>
    )
}