import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

import Navbar from "@/app/layouts/Navbar";

export const Main = styled.main`
    width: 100%;
    max-width: 1440px;
    margin: 0px auto;
    padding: 20px;
`;

export const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};
