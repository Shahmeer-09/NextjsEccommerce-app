"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema, productSchema } from "./lib/ZodSchema";
import prisma from "./lib/db";
import { redirect } from "next/navigation";

export async function createProduct(currentState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "shameersheikh420@gmail.com") {
    throw new Error("user is not authorized");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  const imageArray = submission.value.images
    .flatMap((img) => img.split(","))
    .map((url) => url.trim());
  await prisma.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      price: submission.value.price,
      images: imageArray,
      isFeatured: submission.value.isFeatured == true ? true : false,
      category: submission.value.category,
      status: submission.value.status,
    },
  });
  redirect("/dashbord/products");
}

export async function editProduct(currentState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "shameersheikh420@gmail.com") {
    throw new Error("user is not authorized");
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  const imageArray = submission.value.images
    .flatMap((img) => img.split(","))
    .map((url) => url.trim());
  const productId = formData.get("productId") as string;
  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      price: submission.value.price,
      images: imageArray,
      isFeatured: submission.value.isFeatured == true ? true : false,
      category: submission.value.category,
      status: submission.value.status,
    },
  });

  redirect("/dashbord/products");
}

export async function deleteProduct(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "shameersheikh420@gmail.com") {
    throw new Error("user is not authorized");
  }
  await prisma.product.delete({
    where: {
      id: formData.get("productid") as string,
    },
  });
  redirect("/dashbord/products");
}
export async function creatBanner(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "shameersheikh420@gmail.com") {
    throw new Error("user is not authorized");
  }
  const submission = parseWithZod(formData, {
    schema: bannerSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  await prisma.banner.create({
    data: {
      title: submission.value.title,
      imageBanner: submission.value.imageBanner,
    },
  });

  redirect("/dashbord/banner");
}

export async function deleteBanner( formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "shameersheikh420@gmail.com") {
    throw new Error("user is not authorized");
  }
  await prisma.banner.delete({
    where: {
      id: formData.get("bannerId") as string,
    },
  });

  redirect("/dashbord/banner");
}
