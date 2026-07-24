import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, CreditCard, Send, ArrowLeft } from "lucide-react";
import DashboardPage from "./DashboardPage";
import CardsPage from "./CardsPage";
import TransferPage from "./TransferPage";

const navItems = [
    { href: "", label: "Dashboard", icon: Home },
    { href: "cards", label: "Tarjetas", icon: CreditCard },
    { href: "transfer", label: "Transferir", icon: Send },
]

const FintechRoot = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/demo/fintech/')[1] || "";

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 py-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 lg:col-span-1">
          <div className="p-4 rounded-lg bg-background dark:bg-gray-900 h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-8">Fintech</h2>
             <nav className="flex flex-col space-y-2">
               {navItems.map(item => (
                    <Link 
                        key={item.label}
                        to={item.href} 
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${currentPath === item.href ? 'bg-muted text-primary font-bold' : 'text-muted-foreground'}`}
                    >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="mt-auto">
                 <Button asChild size="sm" variant="outline" className="w-full">
                    <Link to="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al Portafolio</Link>
                </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3 lg:col-span-4">
             <Routes>
                <Route index element={<DashboardPage />} />
                <Route path="cards" element={<CardsPage />} />
                <Route path="transfer" element={<TransferPage />} />
            </Routes>
        </main>
      </div>
    </div>
  );
};

export default FintechRoot;
