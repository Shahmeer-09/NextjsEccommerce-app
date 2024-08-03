import { deleteBanner, deleteProduct } from "@/app/Actions";
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
export default function Deletebanner({ params }: { params: { id: string } }) {
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
            <Button asChild variant="secondary">
                <Link href={"/dashbord/banner"} >cancel</Link>
            </Button>
            <form action={deleteBanner}>
              <input type="text" hidden name="bannerId" value={params.id} />
              <Submitbutton text="Delete" variant="destructive" />
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
