import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WaterDamage from "./pages/WaterDamage";
import FireDamage from "./pages/FireDamage";
import MoldRemediation from "./pages/MoldRemediation";
import StormDamage from "./pages/StormDamage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/water-damage" element={<WaterDamage />} />
          <Route path="/services/fire-damage" element={<FireDamage />} />
          <Route path="/services/mold-remediation" element={<MoldRemediation />} />
          <Route path="/services/storm-damage" element={<StormDamage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
