import { Route, Routes } from "react-router-dom";

import { AuthLayout } from "@/app/layouts/AuthLayout";
import { RootLayout } from "@/app/layouts/RootLayout";

import SignInPage from "@/pages/auth/SignInPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import RecommendCodiPage from "@/pages/recommend/RecommendCodiPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signin" element={<SignInPage />} />
            </Route>
        </Routes>
    );
};
