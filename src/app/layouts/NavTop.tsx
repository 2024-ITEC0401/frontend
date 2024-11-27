import { Link } from "react-router-dom";

import { navTop } from "@/app/constants/navTop";

export const NavTop = () => {
    return (
        <nav className="sticky top-0 w-full mx-auto bg-white shadow-lg h-nav">
            <div className="flex max-w-[1200px] h-full mx-auto justify-between">
                <h1 className="block h-full py-5 font-extrabold text-green-600">LOOK4ME</h1>
                <ul className="flex items-center h-full gap-4">
                    {navTop.map((nav, key) => {
                        return (
                            <li key={key}>
                                <Link to={nav.to} className="text-sm font-semibold">
                                    {nav.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};
