import styled from "@emotion/styled";

import { flex_center } from "@/styles/utils";

export const Wrapper = styled.div<{ width?: SizeProp; height?: SizeProp }>`
    width: ${(props) => (props ? props.width : "280px")};
    height: ${(props) => (props ? props.height : "320px")};

    ${flex_center}
    flex-direction: column;
    gap: 20px;

    background-color: #fff;

    border: 1px solid var(--color-lightgray);
    border-radius: 12px;

    padding: 20px;

    box-shadow: 0px 2px 5px 0px #00000010;
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 70%;

    border-radius: 12px;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
`;
