import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Search, ArrowLeft } from "lucide-react";
import { useCart } from "./CartContext";
import ShoppingCartSheet from "./ShoppingCart";
import { toast } from "sonner";

const mockProducts = [
  { id: 1, name: "Cámara Vintage", price: 125.99, image: "https://images.unsplash.com/photo-1516738901171-81b46e396d24?w=400&q=70&fm=webp", rating: 4.5, reviews: 87, category: "Electrónica", description: "Captura momentos con un estilo único." },
  { id: 2, name: "Auriculares Inalámbricos", price: 89.50, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=70&fm=webp", rating: 4.8, reviews: 123, category: "Audio", description: "Sumérgete en tu música." },
  { id: 3, name: "Zapatillas Deportivas", price: 95.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=70&fm=webp", rating: 4.7, reviews: 210, category: "Calzado", description: "Comodidad y estilo para tu día a día." },
  { id: 4, name: "Reloj Inteligente", price: 199.99, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=70&fm=webp", rating: 4.6, reviews: 150, category: "Wearables", description: "Mantente conectado y monitoriza tu salud." },
  { id: 5, name: "Mochila Urbana", price: 59.90, image: "https://images.unsplash.com/photo-1553062407-98eeb68c6a62?w=400&q=70&fm=webp", rating: 4.9, reviews: 320, category: "Accesorios", description: "La compañera perfecta para tu rutina." },
  { id: 6, name: "Planta Decorativa", price: 25.00, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=70&fm=webp", rating: 4.8, reviews: 75, category: "Hogar", description: "Añade un toque de naturaleza a tu espacio." }
];

const EcommercePage = () => {
    const { cart, addToCart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");

    const handleAddToCart = (product: any) => {
        addToCart(product);
        toast.success(`${product.name} añadido al carrito!`);
    }

    const filteredAndSortedProducts = mockProducts
        .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(p => category === 'all' || p.category === category)
        .sort((a, b) => {
            if (sort === 'price-asc') return a.price - b.price;
            if (sort === 'price-desc') return b.price - a.price;
            if (sort === 'rating') return b.rating - a.rating;
            return 0;
        });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <ShoppingCartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />

      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/demo/ecommerce" className="text-2xl font-bold text-gray-800 dark:text-white">
            ElectroShop
          </Link>
          <div className="flex items-center">
            <Button variant="ghost" className="mr-4 relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>}
            </Button>
            <Button asChild>
                <Link to="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Portafolio</Link>
            </Button>
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Productos Destacados</h1>
            <p className="mt-4 text-xl text-muted-foreground">Descubre nuestra selección de productos de alta calidad.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Buscar productos..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-48"><SelectValue placeholder="Categoría" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="Electrónica">Electrónica</SelectItem>
                    <SelectItem value="Audio">Audio</SelectItem>
                    <SelectItem value="Calzado">Calzado</SelectItem>
                    <SelectItem value="Wearables">Wearables</SelectItem>
                    <SelectItem value="Accesorios">Accesorios</SelectItem>
                    <SelectItem value="Hogar">Hogar</SelectItem>
                </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-full md:w-48"><SelectValue placeholder="Ordenar por" /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="default">Defecto</SelectItem>
                    <SelectItem value="price-asc">Precio: Asc</SelectItem>
                    <SelectItem value="price-desc">Precio: Desc</SelectItem>
                    <SelectItem value="rating">Mejor Valorados</SelectItem>
                </SelectContent>
            </Select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group flex flex-col">
              <CardContent className="p-0">
                 <Link to={`product/${product.id}`} className="block">
                    <img src={product.image} alt={product.name} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                 </Link>
                <div className="p-4 flex flex-col flex-1">
                  <Badge variant="secondary" className="mb-2 w-fit">{product.category}</Badge>
                  <h3 className="text-lg font-semibold mb-2 flex-1 group-hover:text-primary"><Link to={`product/${product.id}`}>{product.name}</Link></h3>
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-primary">${product.price}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 mt-auto">
                <Button className="w-full" onClick={() => handleAddToCart(product)}>
                  <ShoppingCart className="mr-2 h-4 w-4" /> Añadir al Carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-800 mt-12 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} ElectroShop Demo. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default EcommercePage;
