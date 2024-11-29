import { Route, Routes } from "react-router-dom";

import { AuthLayout } from "@/app/layouts/AuthLayout";
import { ProtectedRoute } from "@/app/layouts/ProtectedRoute";
import { RootLayout } from "@/app/layouts/RootLayout";

import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import RecommendCodiPage from "@/pages/recommend/RecommendCodiPage";
import RecommendProductPage from "@/pages/recommend/RecommendProductPage";

export const Router = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <RootLayout />
                    </ProtectedRoute>
                }
            >
                <Route path="/" element={<HomePage />} />
                <Route path="/recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<RecommendProductPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signin" element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />
            </Route>
        </Routes>
    );
};
