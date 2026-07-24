import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Users, Clock, Check, User, Mail } from "lucide-react";

const availableSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "19:00", "20:00", "21:00"];

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [partySize, setPartySize] = useState(2);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNextStep = () => setStep(s => s + 1);
  const handlePrevStep = () => setStep(s => s - 1);
  
  const handleSubmit = () => {
     if (!name || !email) {
      toast({ variant: "destructive", title: "Error", description: "Por favor, completa todos los campos." });
      return;
    }
    handleNextStep();
  }
  
  const StepIndicator = () => (
      <div className="flex justify-center items-center mb-8">
        {[1,2,3,4].map(s => (
            <>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {step > s ? <Check /> : s}
            </div>
            {s < 4 && <div className={`flex-1 h-1 ${step > s ? 'bg-primary' : 'bg-muted'}`}></div>}
            </>
        ))}
      </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Restaurante "El Sabor"</h1>
          <Button asChild>
            <Link to="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al Portafolio</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
             <StepIndicator />
             <CardTitle className="text-2xl text-center">
                {step === 1 && "Selecciona Fecha y Personas"}
                {step === 2 && "Elige un Horario"}
                {step === 3 && "Ingresa tus Datos"}
                {step === 4 && "¡Reserva Confirmada!"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                    </div>
                    <div className="space-y-4">
                        <Label>Personas</Label>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" onClick={() => setPartySize(p => Math.max(1, p-1))}>-</Button>
                            <span className="text-xl font-bold w-12 text-center">{partySize}</span>
                            <Button variant="outline" onClick={() => setPartySize(p => p+1)}>+</Button>
                        </div>
                         <Button onClick={handleNextStep} className="w-full">Siguiente</Button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
                        {availableSlots.map(slot => (
                        <Button key={slot} variant={time === slot ? "default" : "outline"} onClick={() => setTime(slot)}>
                            {slot}
                        </Button>
                        ))}
                    </div>
                    <div className="flex justify-between">
                         <Button variant="outline" onClick={handlePrevStep}>Anterior</Button>
                         <Button onClick={handleNextStep} disabled={!time}>Siguiente</Button>
                    </div>
                </div>
            )}
            {step === 3 && (
                 <div className="max-w-sm mx-auto space-y-4">
                    <div>
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Tu nombre completo" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" />
                    </div>
                    <div className="flex justify-between">
                        <Button variant="outline" onClick={handlePrevStep}>Anterior</Button>
                        <Button onClick={handleSubmit}>Confirmar Reserva</Button>
                    </div>
                </div>
            )}
             {step === 4 && (
                 <div className="text-center">
                    <Check className="mx-auto h-16 w-16 text-green-500 bg-green-100 rounded-full p-2 mb-4" />
                    <h3 className="text-xl font-bold">¡Gracias, {name}!</h3>
                    <p className="text-muted-foreground mt-2">
                        Tu mesa para {partySize} personas ha sido reservada para el {date?.toLocaleDateString()} a las {time}.
                    </p>
                    <p className="text-muted-foreground">Recibirás un email de confirmación en {email}.</p>
                    <Button className="mt-6" onClick={() => setStep(1)}>Hacer otra reserva</Button>
                 </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BookingPage;
