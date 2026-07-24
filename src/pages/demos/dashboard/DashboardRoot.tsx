import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, ShoppingCart, Users, BarChart2, Settings, ArrowLeft, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import OverviewPage from "./OverviewPage";
import OrdersPage from "./OrdersPage";
import CustomersPage from "./CustomersPage";

const navItems = [
    { href: "", label: "Overview", icon: Home },
    { href: "orders", label: "Orders", icon: ShoppingCart },
    { href: "customers", label: "Customers", icon: Users },
    { href: "analytics", label: "Analytics", icon: BarChart2 }
]

const DashboardRoot = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/demo/dashboard/')[1] || "";

    const SidebarContent = () => (
        <>
            <div className="flex h-16 items-center border-b px-6">
                <Link to="/demo/dashboard" className="flex items-center gap-2 font-semibold">
                    <BarChart2 className="h-6 w-6 text-primary" />
                    <span>Analytics</span>
                </Link>
            </div>
            <nav className="flex-1 overflow-auto py-4">
                <div className="grid items-start px-4 text-sm font-medium">
                    {navItems.map(item => (
                        <Link 
                            key={item.label}
                            to={item.href} 
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${currentPath === item.href ? 'bg-muted text-primary' : 'text-muted-foreground'}`}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
            <div className="mt-auto p-4">
                <Button asChild size="sm" variant="outline">
                    <Link to="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al Portafolio</Link>
                </Button>
            </div>
        </>
    )

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Sidebar for Desktop */}
      <aside className="hidden w-64 flex-col border-r bg-background sm:flex">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <header className="flex h-16 items-center justify-between gap-4 border-b bg-background px-6 md:justify-end">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="sm:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs p-0">
                    <SidebarContent />
                </SheetContent>
            </Sheet>
            
            <div className="relative flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"/>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                         <Avatar>
                            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704f" />
                            <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>

        <Routes>
            <Route index element={<OverviewPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="analytics" element={<div>Analytics Page</div>} />
        </Routes>

      </div>
    </div>
  );
};

export default DashboardRoot;
