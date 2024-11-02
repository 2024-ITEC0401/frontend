import styled from "@emotion/styled";

export const Container = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    padding: 5px 10px;
    border-radius: 6px;

    color: ${(props) => (props.active ? "#EDFFEF" : "#0ECB81")};
    background-color: ${(props) => (props.active ? "#0ECB81" : "#EDFFEF")};
`;
