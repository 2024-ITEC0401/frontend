import styled from "@emotion/styled";

export const HashTagElement = styled.div<{ active?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: 36px;

    background-color: ${(props) => (props.active ? "var(--color-secondary)" : "var(--color-point)")};
    color: ${(props) => (props.active ? "var(--color-point)" : "var(--color-secondary)")};

    border-radius: 12px;
    padding: 10px;
`;
