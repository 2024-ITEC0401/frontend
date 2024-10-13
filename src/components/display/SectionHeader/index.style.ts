import styled from "@emotion/styled";

export const Element = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: fit-content;
    height: 100%;

    background-color: transparent;
    color: var(--color-darkgray);

    border: 0;
    padding: 10px;

    &:hover {
        cursor: pointer;
    }
`;
