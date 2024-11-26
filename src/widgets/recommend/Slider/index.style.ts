import styled from "@emotion/styled";

export const SliderWrapper = styled.div<{ variant: "primary" | "secondary" }>`
    width: 100%;
    height: 340px;

    background-color: ${({ variant }) => (variant === "primary" ? "var(--color-lightgray)" : "transparent")};

    display: flex;
    align-items: center;

    padding: 20px;
    border-radius: 12px;
`;
