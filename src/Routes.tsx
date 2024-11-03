import { Route, Routes } from "react-router-dom";

import { ProductRecommendPage } from "@/pages/Recommend/ProductRecommendPage";
import RecommendCodiPage from "@/pages/RecommendCodiPage";
import SignInPage from "@/pages/SignInPage";
import MyClosetPage from "@/pages/myCloset";

import { AuthLayout } from "@/layouts/AuthLayout";
import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/my-closet" element={<MyClosetPage />}></Route>
                <Route path="recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<ProductRecommendPage />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signin" element={<SignInPage />} />
            </Route>
        </Routes>
    );
};
