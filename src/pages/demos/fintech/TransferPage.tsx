import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const contacts = [
    { id: 1, name: "Juan Perez", avatar: "https://i.pravatar.cc/150?u=juan" },
    { id: 2, name: "Maria Garcia", avatar: "https://i.pravatar.cc/150?u=maria" },
    { id: 3, name: "Carlos Sanchez", avatar: "https://i.pravatar.cc/150?u=carlos" },
];

const TransferPage = () => {
    const [amount, setAmount] = useState("");
    const [selectedContact, setSelectedContact] = useState(null);

    const handleTransfer = () => {
        if (!amount || !selectedContact || parseFloat(amount) <= 0) {
            toast.error("Por favor, selecciona un contacto e ingresa un monto válido.");
            return;
        }
        toast.success(`$${amount} han sido enviados a ${selectedContact.name}.`);
        setAmount("");
        setSelectedContact(null);
    }

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Enviar Dinero</CardTitle>
                <CardDescription>Transfiere dinero a tus contactos de forma rápida y segura.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <Label htmlFor="amount">Monto</Label>
                    <Input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="$0.00" className="text-2xl h-14" />
                </div>
                <div>
                    <Label>Contactos</Label>
                    <div className="flex gap-4 py-2 overflow-x-auto">
                        {contacts.map(c => (
                            <div 
                                key={c.id} 
                                onClick={() => setSelectedContact(c)} 
                                className={`text-center space-y-2 cursor-pointer p-2 rounded-lg border-2 ${selectedContact?.id === c.id ? 'border-primary' : 'border-transparent'}`}
                            >
                                <Avatar className="w-16 h-16 mx-auto">
                                    <AvatarImage src={c.avatar} />
                                    <AvatarFallback>{c.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <p className="text-sm">{c.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Button onClick={handleTransfer} className="w-full">Enviar</Button>
            </CardContent>
        </Card>
    )
}

export default TransferPage;
