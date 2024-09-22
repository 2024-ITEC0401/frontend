import { BrowserRouter } from "react-router-dom";

import { Router } from "./Routes";
import reset from "./styles/reset";
import { Global } from "@emotion/react";

export default function App() {
    return (
        <>
            <Global styles={reset} />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}
