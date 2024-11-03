import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
    position: relative;

    width: min(1440px, 100%);
    height: 460px;

    display: flex;
`;

export const CarouselItem = styled.img`
    width: 100%;
    height: 100%;
`;

export const LeftArrowWrapper = styled.div`
    position: absolute;

    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    z-index: 10;
`;

export const RightArrowWrapper = styled.div`
    position: absolute;

    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    z-index: 10;
`;

export const ChildrenWrapper = styled.div`
    position: absolute;

    top: 50%;
    right: 180px;
    transform: translateY(-50%);

    z-index: 20;
`;
