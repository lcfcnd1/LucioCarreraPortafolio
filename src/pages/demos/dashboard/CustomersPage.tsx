import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockCustomers = [
  { id: 1, name: "Liam Johnson", email: "liam@example.com", totalSpent: "$2,500.00", avatar: "https://i.pravatar.cc/150?u=liam" },
  { id: 2, name: "Olivia Smith", email: "olivia@example.com", totalSpent: "$1,750.50", avatar: "https://i.pravatar.cc/150?u=olivia" },
  { id: 3, name: "Noah Williams", email: "noah@example.com", totalSpent: "$3,200.00", avatar: "https://i.pravatar.cc/150?u=noah" },
  { id: 4, name: "Emma Brown", email: "emma@example.com", totalSpent: "$850.75", avatar: "https://i.pravatar.cc/150?u=emma" },
  { id: 5, name: "James Jones", email: "james@example.com", totalSpent: "$4,100.20", avatar: "https://i.pravatar.cc/150?u=james" },
];

const CustomersPage = () => {
    return (
        <main className="flex-1 p-4 sm:p-6">
             <Card>
                <CardHeader><CardTitle>Customers</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead className="text-right">Total Spent</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockCustomers.map(customer => (
                                <TableRow key={customer.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-4">
                                            <Avatar>
                                                <AvatarImage src={customer.avatar} />
                                                <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{customer.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell className="text-right">{customer.totalSpent}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    )
}

export default CustomersPage;
