import { Route, Routes } from "react-router-dom";

import RecommendCodiPage from "@/pages/RecommendCodiPage";

import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="recommend/codi" element={<RecommendCodiPage />} />
            </Route>
        </Routes>
    );
};
