import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 230px;
    height: 250px;

    padding: 12px;

    border: 1px solid var(--color-gray);
    border-radius: 15px;

    box-shadow: 0px 2px 5px 0px #00000010;
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
