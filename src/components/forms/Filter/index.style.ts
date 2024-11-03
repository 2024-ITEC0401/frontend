import styled from "@emotion/styled";

export const Wrapper = styled.div<{ width?: SizeProp; height?: SizeProp }>`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: ${(props) => props.width};
    height: ${(props) => props.height ?? "fit-content"};

    margin: 10px;
    padding: 12px;
    border: 1px solid #dedede;
    border-radius: 15px;
`;

export const FilterKey = styled.p`
    color: var(--color-dark-gray);
`;

export const FilterItemContainer = styled.div`
    display: flex;
    gap: 6px;
`;
