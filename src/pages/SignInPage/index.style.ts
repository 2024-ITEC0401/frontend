import styled from "@emotion/styled";

import authBackground from "@/assets/bg-login.webp";

export const Layout = styled.div`
    width: 100%;
    height: 100vh;

    overflow: hidden;

    background-image: url(${authBackground});
    background-size: cover;
    background-position: center center;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    height: 100%;

    margin-left: auto;
    margin-right: 0px;

    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;

    padding: 50px;

    background-color: #fff;
`;

export const Container = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const SubTitle = styled.h4`
    margin: 16px 0px;

    text-align: center;
`;

export const TitleContainer = styled.div`
    width: 100%;
`;

export const InputContainer = styled.div`
    margin: 15px 0px;

    label > span {
        padding: 10px 0px;
    }
`;

export const FormContainer = styled.div`
    margin: 40px 0px;
`;

export const NavigateToSignUp = styled.p`
    display: block;

    margin: 10px 0px;
    text-align: center;
`;
