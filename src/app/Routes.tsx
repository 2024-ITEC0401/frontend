import { Route, Routes } from "react-router-dom";

import { RecommendForProductPage } from "@/pages/Recommend/RecommendForProductPage";
import RecommendCodiPage from "@/pages/RecommendCodiPage";
import { RecommendProductPage } from "@/pages/RecommendProductPage";
import SignInPage from "@/pages/SignInPage";
import { HomePage } from "@/pages/home";
import MyClosetPage from "@/pages/myCloset";
import MyPage from "@/pages/myPage";

import { AuthLayout } from "@/app/layouts/AuthLayout";
import { RootLayout } from "@/app/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-closet" element={<MyClosetPage />}></Route>
                <Route path="/recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<RecommendProductPage />} />
                <Route path="/recommend/forproduct" element={<RecommendForProductPage />} />
                <Route path="/my-page" element={<MyPage />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signin" element={<SignInPage />} />
            </Route>
        </Routes>
    );
};
