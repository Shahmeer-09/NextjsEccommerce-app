import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrdersPage() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>orders</CardTitle>
          <CardDescription>Recent Orders from your store!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cutomer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <p className="font-medium " >Dave gray</p>
                  <p className="font-medium text-muted-foreground">dave@test.com</p>
                </TableCell>
                <TableCell>Sale</TableCell>
                <TableCell>succesful</TableCell>
                <TableCell>2024-07-09</TableCell>
                <TableCell className="text-right">+$250</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
