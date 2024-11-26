import styled from "@emotion/styled";

export const Wrapper = styled.div<{ width?: SizeProp; height?: SizeProp }>`
    position: absolute;
    right: -${(props) => props.width};

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    padding: 10px 14px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;

    background-color: #fff;
`;

export const Header = styled.div`
    width: 100%;
    padding: 8px 0px;
`;

export const Body = styled.div`
    width: 100%;
`;

export const Item = styled.div`
    padding: 8px 0px;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
        background-color: #f9f9f9;
    }
`;
