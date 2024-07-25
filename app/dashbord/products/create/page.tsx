"use client";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { productSchema } from "@/app/lib/ZodSchema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createProduct } from "@/app/Actions";
import { useForm } from "@conform-to/react";
import { ChevronLeft, XIcon } from "lucide-react";
import Link from "next/link";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { useState } from "react";
import Image from "next/image";
import { Submitbutton } from "@/app/components/Submitbutton";

export default function CreateProductPage() {
  const [images, setimages] = useState<string[]>([]);
  const [currentState, formaction] = useFormState(createProduct, undefined);
  const [form, fields] = useForm({
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const handleDelete = (index: number) => {
    setimages(images.filter((_, i) => i !== index));
  };
  return (
    <>
      <form id={form.id} onSubmit={form.onSubmit} action={formaction}>
        <div className=" flex items-center gap-2 ">
          <Button variant="ghost" className="flex items-center gap-x-3">
            <Link href="/dashbord/products">
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <span className="text-xl font-semibold tracking-tighter">
              New product
            </span>
          </Button>
        </div>
        <Card className="mt-10 ">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>
            <CardDescription>you may create your products here</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6 flex-col">
              <div className="flex flex-col gap-3">
                <Label>Name</Label>
                <Input
                  className="w-full"
                  key={fields.name.key}
                  defaultValue={fields.name.initialValue}
                  name={fields.name.name}
                  type="text"
                  placeholder="product name..."
                />
                <p className="text-red-500">{fields.name.errors}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Description</Label>
                <Textarea
                  key={fields.description.key}
                  name={fields.description.name}
                  defaultValue={fields.description.initialValue}
                  className="w-full"
                  placeholder="product description..."
                />
                <p className="text-red-500"> {fields.description.errors}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Price</Label>
                <Input
                  key={fields.price.key}
                  name={fields.price.name}
                  defaultValue={fields.price.initialValue}
                  className="w-full"
                  type="number"
                  placeholder="$55"
                />
                <p className="text-red-500">{fields.price.errors}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Featured product</Label>
                <Switch
                  key={fields.isFeatured.key}
                  name={fields.isFeatured.name}
                  defaultValue={fields.isFeatured.initialValue}
                />
                <p className="text-red-500">{fields.isFeatured.errors}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Status</Label>
                <Select
                  key={fields.status.key}
                  name={fields.status.name}
                  defaultValue={fields.status.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archieved">Archieved</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-red-500">{fields.status.errors}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Label>category</Label>
                <Select
                  key={fields.category.key}
                  name={fields.category.name}
                  defaultValue={fields.category.initialValue}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                    <SelectItem value="kid">kid</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-red-500">{fields.category.errors}</p>
              </div>
              <div className="flex flex-col gap-3 ">
                <Label>Images</Label>
                <input
                  type="hidden"
                  value={images}
                  key={fields.images.key}
                  name={fields.images.name}
                  defaultValue={fields.images.initialValue as any}
                />
                {images.length > 0 ? (
                  <div className=" flex gap-3 ">
                    {images.map((img, i) => (
                      <div key={i} className="w-[100px]  relative h-[100px]">
                        <Image
                          height={100}
                          width={100}
                          src={img}
                          alt="prodimage"
                        />
                        <button
                          type="button"
                          onClick={() => handleDelete(i)}
                          className=" p-1 bg-red-500 -top-3 -right-3  flex items-center justify-center text-white rounded-md absolute"
                        >
                          <XIcon className=" w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      setimages(res.map((image) => image.url));
                    }}
                    onUploadError={(error) => {
                      alert("image upload failed");
                    }}
                  />
                )}
                <p className="text-red-500">{fields.images.errors}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
           <Submitbutton text="Create product" />
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
