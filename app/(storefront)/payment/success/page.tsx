import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, XCircle } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center ">
      <Card className="w-[350px]">
        <div className=" p-6 ">
          <div className="flex w-full justify-center">
            <Check className=" rounded-full bg-green-400/30 h-12 w-12 text-green-500/55" />
          </div>
          <div className=" text-center mt-3 sm:mt-3 w-full ">
            <h1 className=" font-bold text-xl ">Thank you for your order</h1>
            <p className=" text-sm leading-6 text-muted-foreground ">
              Your order has been confirmed and will be shipped shortly
              please continue with your shopping
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
