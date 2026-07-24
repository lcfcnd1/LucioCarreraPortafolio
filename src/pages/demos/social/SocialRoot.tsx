import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, Bell, Mail, ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FeedPage from "./FeedPage";
import ProfilePage from "./ProfilePage";
import PostPage from "./PostPage";

const navItems = [
    { href: "", label: "Inicio", icon: Home },
    { href: "profile", label: "Perfil", icon: User },
    { href: "#", label: "Notificaciones", icon: Bell },
    { href: "#", label: "Mensajes", icon: Mail },
]

const SocialRoot = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/demo/social/')[1] || "";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10 hidden md:block">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-primary">SocialConnect</h1>
                <div className="flex-1 max-w-xs">
                    {/* Search bar could go here */}
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/#projects" className="text-sm font-medium text-muted-foreground hover:text-primary">Portafolio</Link>
                    <Avatar>
                        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704f" />
                        <AvatarFallback>LC</AvatarFallback>
                    </Avatar>
                </div>
            </nav>
        </header>

      <div className="container mx-auto px-2 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Sidebar */}
        <aside className="hidden md:block md:col-span-1">
          <nav className="sticky top-24">
             {navItems.map(item => (
                <Link 
                    key={item.label}
                    to={item.href} 
                    className={`flex items-center gap-4 text-xl font-semibold rounded-full px-4 py-3 transition-all hover:bg-muted ${currentPath === item.href ? 'text-primary' : ''}`}
                >
                    <item.icon className="h-7 w-7" />
                    <span>{item.label}</span>
                </Link>
            ))}
            <Button className="w-full mt-4 rounded-full">Postear</Button>
          </nav>
           <Button asChild variant="outline" className="w-full mt-8">
             <Link to="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Volver</Link>
           </Button>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-2">
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="post/:id" element={<PostPage />} />
            </Routes>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden md:block md:col-span-1">
             <Card>
                <CardHeader><CardTitle>Tendencias</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div><p className="text-sm text-muted-foreground">Tecnología · Tendencia</p><p className="font-semibold">#React19</p><p className="text-xs text-muted-foreground">15.2K posts</p></div>
                    <div><p className="text-sm text-muted-foreground">Diseño · Tendencia</p><p className="font-semibold">#UIUX</p><p className="text-xs text-muted-foreground">8.7K posts</p></div>
                </CardContent>
            </Card>
        </aside>
      </div>
    </div>
  );
};

export default SocialRoot;
