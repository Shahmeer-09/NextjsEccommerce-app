"use client";

import { creatBanner, createProduct } from "@/app/Actions";
import { Submitbutton } from "@/app/components/Submitbutton";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { bannerSchema } from "@/app/lib/ZodSchema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function Createbanner() {
  const [image, setimage] = useState<string | undefined>(undefined);
  const [currentState, formAction] = useFormState(creatBanner, undefined);
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: bannerSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate:"onInput",
  });

  return (
    <>
      <form id={form.id} onSubmit={form.onSubmit} action={formAction}>
        <div className="flex items-center gap-2">
          <Button variant={"ghost"} type="button" asChild>
            <Link href={"/dashbord/banner"}>
              <ChevronLeft />
            </Link>
          </Button>
          <span className="font-semibold tracking-tighter text-xl  ">
            {" "}
            New banner{" "}
          </span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Banner Details</CardTitle>
            <CardDescription>you may create your banner here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" flex flex-col my-3 gap-3">
              <div className="flex flex-col gap-3">
                <Label>Title</Label>
                <Input
                  name={fields.title.name}
                  key={fields.title.key}
                  defaultValue={fields.title.initialValue}
                  placeholder="Enter your banner title"
                />
                <p className=" text-red-500">{fields.title.errors} </p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Image</Label>
                <input
                  type="text"
                  hidden
                  value={image}
                  key={fields.imageBanner.key}
                  name={fields.imageBanner.name}
                  defaultValue={fields.imageBanner.initialValue}
                />

                {image ? (
                  <Image src={image} alt="banner" width={200} height={200} className="rounded-lg object-cover " />
                ) : (
                  <UploadDropzone
                    endpoint="imagebannerupload"
                    onClientUploadComplete={(res) => setimage(res[0].url)}
                  />
                )}

                <p className=" text-red-500">{fields.imageBanner.errors} </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Submitbutton text="Create banner" />
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
