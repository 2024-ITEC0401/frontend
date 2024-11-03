import { Route, Routes } from "react-router-dom";

import { ProductRecommendPage } from "@/pages/Recommend/ProductRecommendPage";

import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/recommend/product" element={<ProductRecommendPage />} />
            </Route>
        </Routes>
    );
};
