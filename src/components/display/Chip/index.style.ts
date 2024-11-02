import styled from "@emotion/styled";

export const Container = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    padding: 5px 10px;
    border-radius: 6px;

    color: ${(props) => (props.active ? "var(--color-secondary)" : "var(--color-point)")};
    background-color: ${(props) => (props.active ? "var(--color-point)" : "var(--color-secondary)")};
`;
