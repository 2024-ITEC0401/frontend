import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
`;

export const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0 10px;
`;

export const ChipContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const ColorPaletteContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const StyleCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 30px;
`;

export const SaveButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;
