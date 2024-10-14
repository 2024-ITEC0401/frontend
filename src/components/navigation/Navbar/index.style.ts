import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const NavContainer = styled.div`
    width: min(100%, 1440px);
    height: 85px;
    margin: 0 auto;
`;

export const NavWrapper = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
`;

export const Logo = styled.img`
    width: 100px;
    height: 30px;
    cursor: pointer;
`;

export const Nav = styled.nav``;

export const MenuList = styled.ul`
    display: flex;
    margin-left: 275px;
    gap: 28px;
    list-style: none;
    padding: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    margin-left: 20px;
`;

export const StyledLink = styled(Link)<{ isActive: boolean }>`
    color: ${({ isActive }) => (isActive ? "var(--color-primary)" : "#333")};
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: var(--color-primary);
    }

    &:focus {
        color: var(--color-primary);
        font-weight: bold;
        outline: none;
    }
`;

export const UserProfile = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
    gap: 5px;
`;

export const UserProfileImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

export const UserProfileID = styled.div`
    color: #333;
    font-size: 16px;
`;
