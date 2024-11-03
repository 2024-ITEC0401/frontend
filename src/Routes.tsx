import { Route, Routes } from "react-router-dom";

import MyClosetPage from "@/pages/myCloset";

import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/my-closet" element={<MyClosetPage />}></Route>
            </Route>
        </Routes>
    );
};
