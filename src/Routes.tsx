import { Route, Routes } from "react-router-dom";

import { ProductRecommendPage } from "@/pages/Recommend/ProductRecommendPage";
import { RecommendForProductPage } from "@/pages/Recommend/RecommendForProductPage";
import RecommendCodiPage from "@/pages/RecommendCodiPage";
import MyClosetPage from "@/pages/myCloset";

import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/my-closet" element={<MyClosetPage />}></Route>
                <Route path="recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<ProductRecommendPage />} />
                <Route path="recommend/forproduct" element={<RecommendForProductPage />} />
            </Route>
        </Routes>
    );
};
