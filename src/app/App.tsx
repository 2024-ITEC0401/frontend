import { BrowserRouter } from "react-router-dom";

import { Global } from "@emotion/react";

import { Router } from "@/app/Routes";
import { globalStyles } from "@/app/styles/global";

import { resetStyles } from "@/styles/reset";

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
