import { Outlet } from "react-router-dom";

import bgAuth from "@/shared/assets/bg-auth.webp";

export const AuthLayout = () => {
    return (
        <div className="relative">
            <img src={bgAuth} alt="bg-auth" className="object-cover w-screen h-screen" />
            <section className="w-full max-w-[600px] bg-white absolute h-full z-10 top-0 right-0 rounded-l-3xl p-10 flex flex-col justify-around">
                <Outlet />
            </section>
        </div>
    );
};
