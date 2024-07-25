import Editproduct from "@/app/components/dashbord/Editproduct";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

const getProduct = async (prodid: string) => {
  const data = await prisma.product.findUnique({
    where: {
      id: prodid,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
};

export default async function Editprodpage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  console.log(product);
  return (
    <>
      <Editproduct data={product} />
    </>
  );
}
