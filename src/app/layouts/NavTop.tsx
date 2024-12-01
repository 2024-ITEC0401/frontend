import { NavLink } from "react-router-dom";

import { navTop } from "@/app/constants/navTop";
import { NavAside } from "@/app/layouts/NavAside";

import { useAuthStore } from "@/entities/tokens/stores/authStore";

import Look4Me from "@/shared/assets/MainLogo.png";

export const NavTop = () => {
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        alert("로그아웃 되었습니다.");
    };

    return (
        <nav className="sticky top-0 z-[99] w-full bg-white shadow-lg  h-16">
            <div className="flex max-w-[1200px] h-full mx-auto px-8 items-center">
                <NavLink to="/" className="flex items-center h-full">
                    <img src={Look4Me} alt="LOOK4ME Logo" className="object-contain w-auto h-7" />
                </NavLink>

                <ul className="items-center hidden h-full ml-auto gap-7 md:flex">
                    {navTop.map((nav, key) => (
                        <li key={key} className="flex items-center h-nav">
                            <NavLink
                                to={nav.to}
                                className={({ isActive }) =>
                                    `text-sm font-semibold transition-colors duration-200 ${
                                        isActive ? "text-green-600" : "text-gray-600 hover:text-green-500"
                                    }`
                                }
                            >
                                {nav.label}
                            </NavLink>
                        </li>
                    ))}
                    <li className="flex items-center h-nav">
                        <button
                            onClick={handleLogout}
                            className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors duration-200"
                        >
                            로그아웃
                        </button>
                    </li>
                </ul>

                <div className="flex items-center gap-4 ml-16">
                    <NavAside className="block md:hidden" />
                </div>
            </div>
        </nav>
    );
};
