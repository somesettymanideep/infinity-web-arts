import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEOServices from "./pages/services/SEOServices";
import ECommerce from "./pages/services/ECommerce";
import OffshoreServices from "./pages/services/OffshoreServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
       <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEOServices />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/offshore" element={<OffshoreServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
       </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
