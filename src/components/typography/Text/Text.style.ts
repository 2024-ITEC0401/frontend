import { TextProps } from "./Text";
import styled from "@emotion/styled";

export const TextElement = styled.span<TextProps>`
    font-smooth: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    font-family: "SUIT";

    font-weight: ${(props) => props.weight ?? "normal"};

    font-size: ${(props) => {
        switch (props.size) {
            case "2xl":
                return "var(--font-size-2xl)";
            case "xl":
                return "var(--font-size-xl)";
            case "l":
                return "var(--font-size-l)";
            case "m":
                return "var(--font-size-m)";
            case "s":
                return "var(--font-size-s)";
            case "xs":
                return "var(--font-size-xs)";
            case "2xs":
                return "var(--font-size-2xs)";
            case undefined:
                return "var(--font-size-m)";
            default:
                return props.size;
        }
    }};

    color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "var(--color-primary)";
            case "secondary":
                return "var(--color-secondary)";
            case "red":
                return "var(--color-red)";
            case "darkgray":
                return "var(--color-darkgray)";
            case "gray":
                return "var(--color-gray)";
            case "lightgray":
                return "var(--color-lightgray)";
            default:
                return props.color;
        }
    }};
`;
