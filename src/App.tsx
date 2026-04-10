import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "./components/AppLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import TestInterface from "./pages/TestInterface";
import Recommendations from "./pages/Recommendations";
import CareerExplorer from "./pages/CareerExplorer";
import Chatbot from "./pages/Chatbot";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const WithLayout = ({ children }: { children: React.ReactNode }) => (
  <AppLayout>{children}</AppLayout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<WithLayout><Dashboard /></WithLayout>} />
          <Route path="/profile" element={<WithLayout><Profile /></WithLayout>} />
          <Route path="/test" element={<WithLayout><TestInterface /></WithLayout>} />
          <Route path="/recommendations" element={<WithLayout><Recommendations /></WithLayout>} />
          <Route path="/careers" element={<WithLayout><CareerExplorer /></WithLayout>} />
          <Route path="/chatbot" element={<WithLayout><Chatbot /></WithLayout>} />
          <Route path="/admin" element={<WithLayout><AdminDashboard /></WithLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
