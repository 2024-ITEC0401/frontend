import { Outlet } from "react-router-dom";

import Navbar from "@/components/navigation/Navbar";

export const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
