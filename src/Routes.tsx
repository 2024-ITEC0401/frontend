import { Route, Routes } from "react-router-dom";

import { ProductRecommendPage } from "@/pages/Recommend/ProductRecommendPage";
import RecommendCodiPage from "@/pages/RecommendCodiPage";
import { HomePage } from "@/pages/home/HomePage";
import MyClosetPage from "@/pages/myCloset";

import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-closet" element={<MyClosetPage />}></Route>
                <Route path="recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<ProductRecommendPage />} />
            </Route>
        </Routes>
    );
};
