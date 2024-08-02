import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, XCircle } from "lucide-react";
import Link from "next/link";

export default function Canel() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center ">
      <Card className="w-[350px]">
        <div className=" p-6 ">
          <div className="flex w-full justify-center">
            <XCircle className=" rounded-full bg-red-400/30 h-12 w-12 text-red-500/55" />
          </div>
          <div className=" text-center mt-3 sm:mt-3 w-full ">
            <h1 className=" font-bold text-xl ">Payment is cancelled</h1>
            <p className=" text-sm leading-6 text-muted-foreground ">
              Your checout process has been cancelled and noe payment is
              deducted your product details are saved continue with the orders
            </p>
            <Button asChild size="sm" className=" mt-2 w-full ">
              <Link href={"/"}>Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
