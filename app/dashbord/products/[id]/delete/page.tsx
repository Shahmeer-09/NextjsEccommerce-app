
import { deleteProduct } from "@/app/Actions";
import { Submitbutton } from "@/app/components/Submitbutton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Deletproduct({ params }: { params: { id: string } }) {
  return (
    <div className=" flex h-[80vh] items-center justify-center ">
      <Card className=" w-[550px] ">
        <CardHeader>
          <CardTitle>Delete the porduct</CardTitle>
          <CardDescription>
            Are you sure you want to delete this product?
          </CardDescription>
          <CardDescription> This action cannot be undone. </CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" flex justify-between ">
            <Button asChild  variant="secondary">
              <Link href={'/dashbord/products'}>cancel</Link>
            </Button>
            <form action={deleteProduct}>
              <input type="text" hidden name="productid" value={params.id} />
              <Submitbutton text="Delete" variant="destructive" />
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
