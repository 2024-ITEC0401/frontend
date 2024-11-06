import { Route, Routes } from "react-router-dom";

import RecommendCodiPage from "@/pages/RecommendCodiPage";
import { RecommendProductPage } from "@/pages/RecommendProductPage";
import MyClosetPage from "@/pages/myCloset";
import MyPage from "@/pages/myPage";

import { RootLayout } from "@/layouts/RootLayout";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route path="/my-closet" element={<MyClosetPage />}></Route>
                <Route path="/recommend/codi" element={<RecommendCodiPage />} />
                <Route path="/recommend/product" element={<RecommendProductPage />} />
                <Route path="/my-page" element={<MyPage />} />
            </Route>
        </Routes>
    );
};
