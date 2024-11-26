import styled from "@emotion/styled";

export const Wrapper = styled.div<{ width: SizeProp; height: SizeProp }>`
    display: flex;

    width: ${({ width }) => width};
    height: ${({ height }) => height};

    padding: 20px;
    border: 1px solid #dedede;
    border-radius: 15px;
`;

export const Image = styled.img`
    display: block;

    height: 100%;
    aspect-ratio: 1/1;

    margin-right: 15px;
    border-radius: 20px;

    object-fit: cover;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 100%;
`;

export const Description = styled.p`
    display: inline-box;
    width: 100%;
    height: 36px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

export const HashTagContainer = styled.div`
    display: flex;
    gap: 10px;

    overflow: hidden;

    div {
        flex-shrink: 0;
    }
`;

export const Header = styled.div`
    h2,
    h3 {
        margin: 4px 0px;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Icon = styled.img<{ $isLiked: boolean }>`
    display: block;

    width: 30px;
    height: 30px;
    aspect-ratio: 1/1;

    margin-left: 10px;

    @keyframes shake {
        0% {
            transform: scale(1.1);
        }
        25% {
            transform: rotate(5deg);
        }
        50% {
            transform: rotate(-5deg);
        }
        75% {
            transform: rotate(5deg);
        }
    }
    ${(props) => props.$isLiked && `animation: shake 0.5s ease;`}
`;
