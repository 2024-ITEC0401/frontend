import { BrowserRouter } from "react-router-dom";

import { globalStyles } from "@/styles/global";
import { resetStyles } from "@/styles/reset";

import { Router } from "@/Routes";
import { Global } from "@emotion/react";

export default function App() {
    return (
        <>
            <Global styles={[resetStyles, globalStyles]} />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}
