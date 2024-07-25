"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
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
export const Submitbutton = ({ text, variant }:submitbuttonprops) => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button variant={variant}>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          please wait
        </Button>
      ) : (
        <Button variant={variant} >{text}</Button>
      )}
    </>
  );
};
