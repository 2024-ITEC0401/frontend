import { Link } from "react-router-dom";

import styled from "@emotion/styled";

export const NavContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    max-width: 1440px;
    height: 85px;
    margin: 0 auto;
    position: relative;
`;

export const Logo = styled.img`
    width: 100px;
    height: 30px;
    cursor: pointer;
`;

export const Nav = styled.nav``;

export const MenuList = styled.ul`
    display: flex;
    margin-left: 500px;
    gap: 28px;
    list-style: none;
    padding: 0;
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
    margin-right: 15px;
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
