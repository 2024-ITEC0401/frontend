import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    justify-content: center;

    width: 100%;
    margin: 0px auto;
`;

export const FilterContainer = styled.div`
    position: sticky;
    top: 0px;

    width: 30%;
    height: fit-content;
    max-width: 460px;

    padding: 6px;
`;

export const CodiContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    width: 100%;
    padding: 6px;
`;

export const Title = styled.h1`
    margin: 4px 0px;
`;
