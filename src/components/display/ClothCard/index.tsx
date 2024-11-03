import { useCallback, useEffect, useRef, useState } from "react";

import { PopOver, PopOverItem } from "@/components/overlay/PopOver";
import { Text } from "@/components/typography/Text";

import iconDots from "@/assets/icon-dots.svg";

import * as Styles from "./index.style";

export interface ClothCardProps {
    imgSrc?: string;
    title: string;
}

export const ClothCard = ({ imgSrc, title }: ClothCardProps) => {
    const [isPopOverVisible, setIsPopOverVisible] = useState<boolean>(false);
    const popOverRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (popOverRef.current && !popOverRef.current.contains(event.target as Node)) {
            setIsPopOverVisible(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);

    return (
        <Styles.Wrapper>
            {isPopOverVisible && (
                <PopOver width="140px" ref={popOverRef}>
                    <PopOverItem>옷장 정보 수정하기</PopOverItem>
                    <PopOverItem>어울리는 코디 찾기</PopOverItem>
                </PopOver>
            )}
            <Styles.PopOverButton data-testid="pop-over-btn" onClick={() => setIsPopOverVisible(!isPopOverVisible)}>
                <img src={iconDots} alt="cloth-card-popover-button" />
            </Styles.PopOverButton>
            <Styles.Image src={imgSrc} alt="cloth-card-img" />
            <Styles.Title>
                <Text size="m" weight="bold">
                    {title}
                </Text>
            </Styles.Title>
        </Styles.Wrapper>
    );
};
