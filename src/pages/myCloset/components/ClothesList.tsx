import { useRef } from "react";

import styled from "@emotion/styled";

import { ClothCard } from "@/components/display/ClothCard";
import ArrowButton from "@/components/forms/Button/ArrowButton";

import { Cloth } from "@/pages/myCloset";

interface ClothesListProps {
    clothes: Cloth[];
}

const ClothesList = ({ clothes }: ClothesListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <ListWrapper>
            <ArrowWrapper>
                <ArrowButton direction="left" onClick={() => scroll("left")} />
            </ArrowWrapper>
            <CardsWrapper ref={scrollRef}>
                {clothes.map((cloth) => (
                    <ClothCard key={cloth.id} imgSrc={cloth.imgSrc} title={cloth.brandName} />
                ))}
            </CardsWrapper>
            <ArrowWrapper>
                <ArrowButton direction="right" onClick={() => scroll("right")} />
            </ArrowWrapper>
        </ListWrapper>
    );
};

export default ClothesList;

const ArrowWrapper = styled.div`
    margin: 15px;
    flex-shrink: 0;
`;

const CardsWrapper = styled.div`
    display: flex;
    gap: 50px;
    overflow-x: hidden;
    padding: 20px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    scroll-behavior: smooth;

    & > div {
        flex-shrink: 0;
        width: 200px;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ListWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
`;
