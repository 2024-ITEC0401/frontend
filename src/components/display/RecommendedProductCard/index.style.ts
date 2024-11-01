import styled from "@emotion/styled";

import { RecommendedProductCardProps } from "@/components/display/RecommendedProductCard";

import { flex_center } from "@/styles/utils";

export const Wrapper = styled.div<RecommendedProductCardProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${flex_center}
    flex-direction: column;
    gap: 20px;

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
