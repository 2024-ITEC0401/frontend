import styled from "@emotion/styled";

import { flex_center } from "@/styles/utils";

import { ButtonProps } from "./index";

export const ButtonElement = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "var(--color-primary)";
            case "secondary":
                return "var(--color-secondary)";
            case "login":
                return "var(--color-gray)";
            default:
                return "var(--color-primary)";
        }
    }};

    color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#fff";
            case "secondary":
                return "#fff";
            case "login":
                return "var(--color-darkgray)";
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
