import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 230px;
    height: 250px;

    padding: 12px;
    border-radius: 15px;

    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, 0.05);
    background-color: #fff;
`;

export const Image = styled.img`
    width: 100%;
    height: 170px;

    object-fit: cover;
    border-radius: 12px;
`;

export const Title = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex: 1;

    span {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const PopOverButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;

    background: none;
    border: 0;

    cursor: pointer;
`;
