import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "./components/AdminLayout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";
import Users from "./pages/Users";
import Roles from "./pages/Roles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tenants" element={<Tenants />} />
            <Route path="users" element={<Users />} />
            <Route path="roles" element={<Roles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;