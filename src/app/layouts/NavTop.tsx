import { Link } from "react-router-dom";

import { navTop } from "@/app/constants/navTop";
import { NavAside } from "@/app/layouts/NavAside";

export const NavTop = () => {
    return (
        <nav className="sticky top-0 z-[99] w-full mx-auto bg-white shadow-lg h-nav">
            <div className="flex max-w-[1200px] h-full mx-auto justify-between px-8">
                <h1 className="block h-full py-5 font-extrabold text-green-600">LOOK4ME</h1>
                <ul className="hidden gap-4 h-nav md:flex">
                    {navTop.map((nav, key) => {
                        return (
                            <li key={key} className="flex items-center h-nav">
                                <Link to={nav.to} className="text-sm font-semibold">
                                    {nav.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <NavAside className="block md:hidden" />
            </div>
        </nav>
    );
};
