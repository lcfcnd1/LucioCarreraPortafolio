import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, Area, AreaChart } from "recharts";

const chartData = [
  { month: "Enero", users: 186, revenue: 8000 },
  { month: "Febrero", users: 305, revenue: 9500 },
  { month: "Marzo", users: 237, revenue: 7800 },
  { month: "Abril", users: 273, revenue: 11000 },
  { month: "Mayo", users: 209, revenue: 8800 },
  { month: "Junio", users: 214, revenue: 9200 },
];

const recentSales = [
  { id: 1, name: "Olivia Martin", email: "olivia.martin@email.com", amount: "$1,999.00" },
  { id: 2, name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$39.00" },
  { id: 3, name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "$299.00" },
  { id: 4, name: "William Kim", email: "will@email.com", amount: "$99.00" },
  { id: 5, name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$39.00" },
];

const OverviewPage = () => {
    return (
        <main className="flex-1 p-4 sm:p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Subscriptions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                 <Card>
                    <CardHeader>
                        <CardTitle>Users Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer className="h-64" config={{}}>
                             <AreaChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Area type="monotone" dataKey="users" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.3)" />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead className="hidden sm:table-cell">Email</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recentSales.map(sale =>(
                                <TableRow key={sale.id}>
                                    <TableCell className="font-medium">{sale.name}</TableCell>
                                    <TableCell className="hidden sm:table-cell">{sale.email}</TableCell>
                                    <TableCell className="text-right">{sale.amount}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
             <div className="mt-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Revenue Over Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer className="h-80" config={{}}>
                             <LineChart accessibilityLayer data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}

export default OverviewPage;
