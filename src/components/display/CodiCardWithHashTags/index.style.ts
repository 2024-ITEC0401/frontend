import styled from "@emotion/styled";

import { flex_center } from "@/styles/utils";

export const Wrapper = styled.div<{ width: SizeProp; height: SizeProp }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    ${flex_center};
    flex-direction: column;
    gap: 15px;

    border: 1px solid var(--color-gray);
    border-radius: 12px;

    padding: 15px;
`;

export const CodiImg = styled.img`
    width: 100%;
    height: 70%;

    border-radius: 12px;
`;

export const HashTagsContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
