import { BrowserRouter } from "react-router-dom";

import { Router } from "@/app/Routes";
import { queryClient } from "@/app/config/axios";
import "@/app/styles/tailwind.css";

import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    );
}
