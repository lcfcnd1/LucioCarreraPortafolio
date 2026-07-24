import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import EcommercePage from "./EcommercePage";
import ProductDetailPage from "./ProductDetailPage"; // This file will be created next
import { Toaster } from "@/components/ui/sonner";

const EcommerceRoot = () => {
  return (
    <CartProvider>
      <Toaster richColors />
      <Routes>
        <Route index element={<EcommercePage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
      </Routes>
    </CartProvider>
  );
};

export default EcommerceRoot;
