import { Route, Routes } from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}></Route>
        </Routes>
    );
};
