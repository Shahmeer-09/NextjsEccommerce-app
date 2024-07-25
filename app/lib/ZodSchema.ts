import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published", "archieved"]),
  price: z.number().min(1),
  category: z.enum(["men", "women", "kid"]),
  isFeatured: z.boolean().optional(),
  images: z.array(z.string()).min(1, "Atleat one image is req"),
});
export const bannerSchema = z.object({
   title : z.string(),
   imageBanner: z.string(),
});
