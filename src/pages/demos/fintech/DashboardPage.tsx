import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  { description: "Suscripción a Netflix", date: "15 de Jun, 2024", amount: -15.99, type: "Entretenimiento" },
  { description: "Salario", date: "14 de Jun, 2024", amount: 2500.00, type: "Ingreso" },
  { description: "Compra en Amazon", date: "12 de Jun, 2024", amount: -89.50, type: "Compras" },
  { description: "Cafetería 'El Gato'", date: "11 de Jun, 2024", amount: -8.75, type: "Comida" },
  { description: "Transferencia de Juan", date: "10 de Jun, 2024", amount: 150.00, type: "Ingreso" },
];

const spendingData = [
  { name: "Comida", value: 350 },
  { name: "Compras", value: 480 },
  { name: "Transporte", value: 210 },
  { name: "Entretenimiento", value: 150 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashboardPage = () => {
    return (
        <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Balance Total</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">$12,450.78</span>
                <p className="text-sm opacity-80">+1.2% vs el mes pasado</p>
              </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Análisis de Gastos</CardTitle>
                        <CardDescription>Este Mes</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={{}} className="h-56">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Pie data={spendingData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                            {spendingData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Metas de Ahorro</CardTitle>
                    </CardHeader>
                    {/* ... Ahorro ... */}
                </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Transacciones Recientes</CardTitle>
                <Button variant="ghost" size="sm">Ver todo</Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {transactions.map((t, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-full ${t.amount > 0 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                               {t.amount > 0 ? <ArrowDownLeft className="text-green-500" /> : <ArrowUpRight className="text-red-500" />}
                            </div>
                            <div>
                                <p className="font-medium">{t.description}</p>
                                <p className="text-sm text-muted-foreground">{t.date}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className={`text-right font-semibold ${t.amount > 0 ? 'text-green-500' : ''}`}>
                          {t.amount > 0 ? '+' : ''}${t.amount.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
    )
}

export default DashboardPage;
