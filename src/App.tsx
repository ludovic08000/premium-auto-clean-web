
import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

// Utilisation de lazy loading pour le composant Index
const Index = lazy(() => import("./pages/Index"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60000, // Cache data for 1 minute
    },
  },
});

const App = () => {
  useEffect(() => {
    console.log("App component is mounting");
    console.log("Root element:", document.getElementById("root"));
    console.log("Current pathname:", window.location.pathname);
    
    return () => {
      console.log("App component is unmounting");
    };
  }, []);

  console.log("App is rendering");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="flex h-screen items-center justify-center">Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
