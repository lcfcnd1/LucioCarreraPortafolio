import { useParams, Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

// Re-using the mock data. In a real app, you'd fetch this.
const mockProducts = [
  { id: 1, name: "Cámara Vintage", price: 125.99, image: "https://images.unsplash.com/photo-1516738901171-81b46e396d24?w=400&q=70&fm=webp", rating: 4.5, reviews: 87, category: "Electrónica", description: "Captura momentos con un estilo único. Esta cámara vintage combina un diseño clásico con la tecnología moderna para fotos impresionantes." },
  { id: 2, name: "Auriculares Inalámbricos", price: 89.50, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=70&fm=webp", rating: 4.8, reviews: 123, category: "Audio", description: "Sumérgete en tu música con estos auriculares inalámbricos de alta fidelidad. Batería de larga duración y cancelación de ruido." },
  { id: 3, name: "Zapatillas Deportivas", price: 95.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=70&fm=webp", rating: 4.7, reviews: 210, category: "Calzado", description: "Comodidad y estilo para tu día a día. Estas zapatillas están diseñadas para ofrecerte el máximo rendimiento y un look moderno." },
  { id: 4, name: "Reloj Inteligente", price: 199.99, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=70&fm=webp", rating: 4.6, reviews: 150, category: "Wearables", description: "Mantente conectado y monitoriza tu salud con este reloj inteligente. Recibe notificaciones, registra tus entrenamientos y más." },
  { id: 5, name: "Mochila Urbana", price: 59.90, image: "https://images.unsplash.com/photo-1553062407-98eeb68c6a62?w=400&q=70&fm=webp", rating: 4.9, reviews: 320, category: "Accesorios", description: "La compañera perfecta para tu rutina. Esta mochila combina un diseño minimalista con la máxima funcionalidad y durabilidad." },
  { id: 6, name: "Planta Decorativa", price: 25.00, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=70&fm=webp", rating: 4.8, reviews: 75, category: "Hogar", description: "Añade un toque de naturaleza a tu espacio. Esta planta es fácil de cuidar y perfecta para cualquier rincón de tu hogar u oficina." }
];

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-12">Producto no encontrado.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} ha sido añadido al carrito!`);
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 sm:p-8">
      <div className="container mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/demo/ecommerce"><ArrowLeft className="mr-2 h-4 w-4" /> Volver a la tienda</Link>
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">{product.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="ml-2 text-lg">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
            <p className="text-muted-foreground mb-8">{product.description}</p>
            <Button onClick={handleAddToCart} size="lg" className="w-full md:w-auto">
              Añadir al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
