import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 4px 12px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Category = styled.div`
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`;

export const KoreanCategory = styled.div`
    position: absolute;
    bottom: 20px;
    color: #ffffff;
`;

export const EnglishCategory = styled.div`
    position: absolute;
    bottom: 0px;
`;
