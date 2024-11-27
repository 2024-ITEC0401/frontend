import { BrowserRouter } from "react-router-dom";

import { Router } from "@/app/Routes";
import "@/app/styles/tailwind.css";

export default function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}
