import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";
import { DemoExperience } from "./pages/demos/DemoExperience";

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
          <Route path="/demo/ecommerce/*" element={<DemoExperience kind="commerce" />} />
          <Route path="/demo/dashboard/*" element={<DemoExperience kind="analytics" />} />
          <Route path="/demo/management/*" element={<DemoExperience kind="management" />} />
          <Route path="/demo/booking/*" element={<DemoExperience kind="booking" />} />
          <Route path="/demo/automation/*" element={<DemoExperience kind="automation" />} />
          <Route path="/demo/social/*" element={<DemoExperience kind="social" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
