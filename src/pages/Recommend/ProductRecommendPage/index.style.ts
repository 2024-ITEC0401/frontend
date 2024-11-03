import styled from "@emotion/styled";

import { flex_center } from "@/styles/utils";

export const Wrapper = styled.div`
    width: min(1440px, 100%);
    margin: 50px auto;

    ${flex_center};
    flex-direction: column;

    gap: 30px;
`;

export const Container = styled.div`
    width: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;

    gap: 40px;
`;

export const Items = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
`;

export const Item = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 20px;
`;

export const ColorItem = styled.div`
    width: 100%;

    background-color: var(--color-lightgray);

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 20px 50px;
    border-radius: 12px;

    box-shadow: 0px 2px 10px 0px #00000010;
`;
