import { NavLink } from "react-router-dom";

import { Menu } from "lucide-react";

import { navTop } from "@/app/constants/navTop";

import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";

export interface NavAsideProps {
    className?: string;
}

export const NavAside = ({ className }: NavAsideProps) => {
    return (
        <Sheet>
            <SheetTrigger className={className}>
                <Menu />
            </SheetTrigger>
            <SheetContent className="mt-[60px] w-[300px] flex flex-col">
                <div className="flex flex-col">
                    {navTop.map((nav, key) => {
                        return (
                            <li key={key} className="list-none">
                                <NavLink to={nav.to} className="h-[40px] block font-semibold">
                                    {nav.label}
                                </NavLink>
                            </li>
                        );
                    })}

                    <li className="list-none">
                        <NavLink to="/" className="h-[40px] block font-semibold text-destructive">
                            로그아웃
                        </NavLink>
                    </li>
                </div>
            </SheetContent>
        </Sheet>
    );
};
