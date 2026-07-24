import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";
import EcommerceRoot from "./pages/demos/ecommerce/EcommerceRoot";
import DashboardRoot from "./pages/demos/dashboard/DashboardRoot";
import ManagementPage from "./pages/demos/management/ManagementPage";
import BookingPage from "./pages/demos/booking/BookingPage";
import FintechRoot from "./pages/demos/fintech/FintechRoot";
import SocialRoot from "./pages/demos/social/SocialRoot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/luciocarreracv" element={<CV />} />
          <Route path="/demo/ecommerce/*" element={<EcommerceRoot />} />
          <Route path="/demo/dashboard/*" element={<DashboardRoot />} />
          <Route path="/demo/management" element={<ManagementPage />} />
          <Route path="/demo/booking" element={<BookingPage />} />
          <Route path="/demo/fintech/*" element={<FintechRoot />} />
          <Route path="/demo/social/*" element={<SocialRoot />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
