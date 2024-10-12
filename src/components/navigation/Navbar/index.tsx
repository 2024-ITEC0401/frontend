import { useState } from "react";
import { useLocation } from "react-router-dom";

import * as Styles from "@/components/navigation/Navbar/index.style";
import ProfileDropdown from "@/components/navigation/ProfileDropdown";

import Logo from "@/assets/MainLogo.png";
import UserLogo from "@/assets/SubLogo.png";

const Navbar = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const menuItems = [
        { name: "내 옷장 관리", link: "/wardrobe" },
        { name: "맞춤 상품 추천", link: "/recommend-products" },
        { name: "코디 추천", link: "/recommend-coords" },
        { name: "마이페이지", link: "/mypage" },
    ];

    return (
        <Styles.NavContainer>
            <Styles.Logo src={Logo} onClick={() => (window.location.href = "/")} />
            <Styles.Nav>
                <Styles.MenuList>
                    {menuItems.map((item, index) => (
                        <Styles.MenuItem key={index}>
                            <Styles.StyledLink to={item.link} isActive={location.pathname === item.link}>
                                {item.name}
                            </Styles.StyledLink>
                        </Styles.MenuItem>
                    ))}
                </Styles.MenuList>
            </Styles.Nav>
            <Styles.UserProfile onClick={toggleDropdown}>
                <Styles.UserProfileImage src={UserLogo} alt="Profile" />
                <Styles.UserProfileID>홍길동 님</Styles.UserProfileID>
            </Styles.UserProfile>
            {isDropdownOpen && <ProfileDropdown />}
        </Styles.NavContainer>
    );
};

export default Navbar;
