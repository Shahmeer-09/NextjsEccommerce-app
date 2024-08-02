"use client";

import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { useFormStatus } from "react-dom";
interface submitbuttonprops {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export const Addtocartbtn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="w-full mt-4">
          please wait
          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button size="lg" className="w-full mt-4 ">
          Add to cart <ShoppingBag className="ml-2 h-4 w-4" />
        </Button>
      )}
    </>
  );
};

export const Submitbutton = ({ text, variant }: submitbuttonprops) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button variant={variant}>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          please wait
        </Button>
      ) : (
        <Button variant={variant}>{text}</Button>
      )}
    </>
  );
};

export const Deletbutton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button disabled className=" bg-none text-sm text-blue-600 ">
          Removing...
        </button>
      ) : (
        <button type="submit" className=" bg-none text-sm text-blue-600 ">
          delete
        </button>
      )}
    </>
  );
};

export function Checkoutbtn() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className=" w-full mt-2 " size="lg">
          <Loader2 className=" mr-2 h-4 w-4 animate-spin " />
          Processing....
        </Button>
      ) : (
        <Button className=" w-full mt-2 " size="lg">
          Checkout
        </Button>
      )}
    </>
  );
}
