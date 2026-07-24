import { useCart } from "./CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Trash2, Plus, Minus } from "lucide-react";

type ShoppingCartProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ShoppingCart = ({ open, onOpenChange }: ShoppingCartProps) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Tu Carrito</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
                      <span>{item.quantity}</span>
                      <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
            <SheetFooter className="mt-auto border-t pt-4">
              <div className="w-full">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <Button className="w-full mb-2">Finalizar Compra</Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>Vaciar Carrito</Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold">Tu carrito está vacío</h3>
            <p className="text-muted-foreground mt-2">Añade productos para verlos aquí.</p>
             <Button className="mt-4" onClick={() => onOpenChange(false)}>Seguir comprando</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
