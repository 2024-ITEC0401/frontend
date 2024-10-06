import { ColorProps } from "./Color";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 65px;
    height: fit-content;

    margin: 4px;
`;

export const Container = styled.div<Pick<ColorProps, "active" | "color">>`
    width: 100%;
    height: 65px;

    padding: 4px;
    border-radius: 50%;
    border: 2px solid ${(props) => (props.active ? props.color : "#fff")};
`;

export const Item = styled.div<Pick<ColorProps, "color">>`
    width: 100%;
    height: 100%;

    border-radius: 50%;

    background-color: ${(props) => props.color};
`;

export const Label = styled.p`
    margin: 6px 0px;
    text-align: center;
`;
