import styled from "@emotion/styled";

export const Button = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    border: none;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const Arrow = styled.svg`
  width: 24px;
  height: 24px;
  fill: none;
  stroke: black;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;