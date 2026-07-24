import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Wifi, Nfc } from "lucide-react";

const CardsPage = () => {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Mis Tarjetas</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8 md:grid-cols-2">
                    {/* Tarjeta 1 */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-900 to-black text-white flex flex-col justify-between h-56">
                        <div className="flex justify-between items-start">
                            <span className="font-bold text-lg">FinBank</span>
                            <Wifi className="h-6 w-6" />
                        </div>
                        <div>
                             <p className="text-2xl font-mono tracking-widest">**** **** **** 4628</p>
                             <div className="flex justify-between items-end mt-4">
                                <div>
                                    <p className="text-xs opacity-70">Titular</p>
                                    <p className="font-medium">Lucio Carrera</p>
                                </div>
                                <div>
                                    <p className="text-xs opacity-70">Expira</p>
                                    <p className="font-medium">12/28</p>
                                </div>
                             </div>
                        </div>
                    </div>
                    {/* Tarjeta 2 */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex flex-col justify-between h-56">
                         <div className="flex justify-between items-start">
                            <span className="font-bold text-lg">Neovest</span>
                            <Nfc className="h-6 w-6" />
                        </div>
                        <div>
                             <p className="text-2xl font-mono tracking-widest">**** **** **** 8912</p>
                             <div className="flex justify-between items-end mt-4">
                                <div>
                                    <p className="text-xs opacity-70">Titular</p>
                                    <p className="font-medium">Lucio Carrera</p>
                                </div>
                                <div>
                                    <p className="text-xs opacity-70">Expira</p>
                                    <p className="font-medium">08/27</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Opciones</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline">Bloquear Tarjeta</Button>
                    <Button variant="outline">Ver PIN</Button>
                    <Button variant="outline">Límites de Gasto</Button>
                    <Button variant="outline">Añadir a Apple Wallet</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardsPage;
