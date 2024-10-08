import styled from "@emotion/styled";

import { flex_center } from "@/styles/utils";

import { ButtonProps } from "./index";

export const ButtonElement = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#00A869";
            case "secondary":
                return "#FF5D5D";
            case "login":
                return "#DBDBDB";
            default:
                return "#00A869";
        }
    }};

    color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#fff";
            case "secondary":
                return "#fff";
            case "login":
                return "#767676";
            default:
                return "#fff";
        }
    }};

    border: 0;
    border-radius: 12px;

    ${flex_center};

    gap: 10px;

    &:hover {
        cursor: pointer;
    }
`;

export const LogoElement = styled.img`
    width: 25px;
    height: 25px;

    border-radius: 12px;
`;
