import { BrowserRouter } from "react-router-dom";

import { Global } from "@emotion/react";

import { globalStyles } from "@/styles/global";
import { resetStyles } from "@/styles/reset";

import { Router } from "@/Routes";

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
