import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "@/components/Footer";


const queryClient = new QueryClient();

function Layout() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-background">
            <div className="flex-1 flex flex-col">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster/>
            <Sonner/>
            <BrowserRouter>
                <Routes>
                    <Route element={< Layout />}>
                        <Route path="/" element={< Index />}/>
                        <Route path="/contact" element={< Contact />}/>
                        <Route path="/about" element={< About />}/> {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={< NotFound />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
