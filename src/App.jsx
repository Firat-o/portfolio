import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

// 1. Die neuen Seiten importieren
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";

import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from "./components/CustomCursor";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        
        {/* 2. Die neuen Routen registrieren */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/privacy" element={<Privacy />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <CustomCursor />
      <Toaster />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
