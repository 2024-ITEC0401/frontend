import { Route, Routes } from "react-router-dom";

import RecommendCodiPage from "@/pages/RecommendCodiPage";
import { HomePage } from "@/pages/home/HomePage";
import SignInPage from "@/pages/SignInPage";
import { RecommendProductPage } from "@/pages/RecommendProductPage";
import MyClosetPage from "@/pages/myCloset";

import { AuthLayout } from "@/layouts/AuthLayout";
import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-closet" element={<MyClosetPage />}></Route>
                <Route path="/recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<RecommendProductPage />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signin" element={<SignInPage />} />
            </Route>
        </Routes>
    );
};
