import { SearchBarProps } from "@/components/forms/SearchBar/index";

import styled from "@emotion/styled";

export const SearchBarWrapper = styled.div<SearchBarProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    display: flex;
    position: relative;
`;

export const SearchBarContainer = styled.input`
    width: 100%;
    height: 100%;

    background-color: var(--color-lightgray);

    border: 1px solid var(--color-gray);
    border-radius: 30px;

    padding: 0px calc(${(props) => props.height} + 20px) 0 20px;

    &:focus {
        outline: none;
    }
`;

export const SearchBtn = styled.button<SearchBarProps>`
    width: ${(props) => props.height};
    height: 100%;

    background-color: var(--color-primary);

    border: 0;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 0;

    &:hover {
        cursor: pointer;
    }
`;
