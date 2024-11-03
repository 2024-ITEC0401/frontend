import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: min(1440px, 100%);

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const WeatherContainer = styled.div`
    width: 100%;

    margin-left: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    gap: 10px;
`;

export const TextContainer = styled.div`
    width: 100%;

    display: flex;
    gap: 20px;
`;

export const Container = styled.div`
    width: 100%;

    background-color: var(--color-lightgray);

    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 20px 30px;
    border-radius: 12px;
`;

export const ClothContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 25px;
`;

export const WeatherButton = styled.button`
    width: fit-content;

    background-color: rgba(255, 255, 255, 0.4);
    color: #fff;

    font-size: var(--font-size-l);

    border: 0;
    border-radius: 30px;

    padding: 15px 30px;
    margin-top: 15px;

    &:hover {
        cursor: pointer;
    }
`;
