import prisma from "@/app/lib/db";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarImage } from "@radix-ui/react-avatar";
import { unstable_noStore } from "next/cache";
const getData = async () => {
  const data = await prisma.order.findMany({
    select: {
      id: true,
      amount: true,
      owner: {
        select: {
          firstName: true,
          email: true,
          profileImage: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 7,
  });
  return data;
};
export async function Recentsales() {
  unstable_noStore()
  const data = await getData();
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {data?.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Avatar className=" hidden sm:flex h-9 w-9">
              <AvatarImage src={item.owner?.profileImage} />
              <AvatarFallback>
                {item?.owner?.firstName.slice(0, 3)}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium">{item.owner?.firstName}</p>
              <p className="text-sm font-medium text-muted-foreground">
                {item.owner?.email}
              </p>
            </div>
            <p className="ml-auto font-medium">
              +${new Intl.NumberFormat().format(item.amount / 100)}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
