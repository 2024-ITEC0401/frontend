import { InputProps } from "./index";
import styled from "@emotion/styled";

export const InputWrapper = styled.div<InputProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    display: flex;
    flex-direction: column;

    gap: 15px;
`;

export const InputElement = styled.input`
    width: 100%;
    height: 100%;

    background-color: var(--color-gray);

    font-size: var(--font-size-m);

    border: 0;
    border-radius: 12px;

    padding: 0px 20px;

    &:focus {
        outline: none;
    }
`;

export const Label = styled.label`
    font-size: var(--font-size-l);
    font-weight: bold;
`;
