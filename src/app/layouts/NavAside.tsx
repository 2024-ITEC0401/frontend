import { NavLink } from "react-router-dom";

import { Menu } from "lucide-react";

import { navTop } from "@/app/constants/navTop";

import { useAuthStore } from "@/entities/tokens/stores/authStore";

import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";

export interface NavAsideProps {
    className?: string;
}

export const NavAside = ({ className = "" }: NavAsideProps) => {
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        alert("로그아웃 되었습니다.");
    };

    return (
        <Sheet>
            <SheetTrigger className={`absolute right-10 ${className}`}>
                <Menu />
            </SheetTrigger>
            <SheetContent className="mt-[60px] w-[300px] flex flex-col">
                <div className="flex flex-col">
                    {navTop.map((nav, key) => {
                        return (
                            <li key={key} className="list-none">
                                <NavLink
                                    to={nav.to}
                                    className={({ isActive }) =>
                                        `h-[40px] block font-semibold transition-colors duration-200 ${
                                            isActive ? "text-green-600" : "text-gray-600 hover:text-green-500"
                                        }`
                                    }
                                >
                                    {nav.label}
                                </NavLink>
                            </li>
                        );
                    })}

                    <li className="list-none">
                        <button
                            onClick={handleLogout}
                            className="h-[20px] block text-left font-semibold text-red-600 hover:text-red-700 transition-colors duration-200"
                        >
                            로그아웃
                        </button>
                    </li>
                </div>
            </SheetContent>
        </Sheet>
    );
};
