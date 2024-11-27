import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/app/layouts/Header";

export const RootLayout = () => {
    return (
        <Fragment>
            <Header />
            <main className="w-full max-w-[1200px] mx-auto p-[10px]">
                <Outlet />
            </main>
        </Fragment>
    );
};
