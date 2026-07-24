import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

const mockOrders = [
  { id: "ORD001", date: "2024-06-20", customer: "Liam Johnson", status: "Delivered", total: "$250.00" },
  { id: "ORD002", date: "2024-06-18", customer: "Olivia Smith", status: "Shipped", total: "$150.00" },
  { id: "ORD003", date: "2024-06-15", customer: "Noah Williams", status: "Delivered", total: "$350.00" },
  { id: "ORD004", date: "2024-06-12", customer: "Emma Brown", status: "Processing", total: "$450.00" },
  { id: "ORD005", date: "2024-06-10", customer: "James Jones", status: "Cancelled", total: "$550.00" },
];

const OrdersPage = () => {
    return (
        <main className="flex-1 p-4 sm:p-6">
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="delivered">Delivered</TabsTrigger>
                        <TabsTrigger value="shipped">Shipped</TabsTrigger>
                        <TabsTrigger value="processing">Processing</TabsTrigger>
                        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-7 gap-1">
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <TabsContent value="all">
                    <Card>
                        <CardHeader><CardTitle>Orders</CardTitle></CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Order</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockOrders.map(order => (
                                        <TableRow key={order.id}>
                                            <TableCell className="font-medium">{order.id}</TableCell>
                                            <TableCell>{order.date}</TableCell>
                                            <TableCell>{order.customer}</TableCell>
                                            <TableCell>
                                                <Badge variant={
                                                    order.status === 'Delivered' ? 'default' :
                                                    order.status === 'Cancelled' ? 'destructive' :
                                                    'secondary'
                                                }>{order.status}</Badge>
                                            </TableCell>
                                            <TableCell className="text-right">{order.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </main>
    )
}

export default OrdersPage;
