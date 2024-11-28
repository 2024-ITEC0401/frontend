import { Route, Routes } from "react-router-dom";

import { AuthLayout } from "@/app/layouts/AuthLayout";
import { RootLayout } from "@/app/layouts/RootLayout";

import SignInPage from "@/pages/auth/SignInPage";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* <Route path="/my-closet" element={<MyClosetPage />}></Route>
                <Route path="/recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<RecommendProductPage />} />
                <Route path="/recommend/forproduct" element={<RecommendForProductPage />} />
                <Route path="/my-page" element={<MyPage />} />  */}
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
                <Route path="signin" element={<SignInPage />} />
            </Route>
        </Routes>
    );
};
