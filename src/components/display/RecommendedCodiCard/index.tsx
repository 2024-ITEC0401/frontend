import { useCallback, useState } from "react";

import { HashTag } from "@/components/display/HashTag";
import { Text } from "@/components/typography/Text/Text";

import iconHeartActive from "@/assets/icon-heart__active.svg";
import iconHeartInActive from "@/assets/icon-heart__inactive.svg";

import * as Styles from "./index.style";

export interface RecommendedCodiCardProps {
    width: SizeProp;
    height: SizeProp;

    imgSrc: string;
    title: string;
    createdAt: string;
    description: string;
    hashtags: string[];
}

export const RecommendedCodiCard = ({
    width,
    height,
    imgSrc,
    title,
    createdAt,
    description,
    hashtags,
}: RecommendedCodiCardProps) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleLikeBtnClick = useCallback(() => {
        setIsLiked((isLiked) => !isLiked);
    }, []);

    return (
        <Styles.Wrapper width={width} height={height}>
            <Styles.Image src={imgSrc} alt="codi-image" />
            <Styles.Container>
                <Styles.Header>
                    <h2>
                        <Text size="m" weight="bold">
                            {title}
                        </Text>
                    </h2>
                    <h3>
                        <Text size="m" color="#767676">
                            {createdAt}
                        </Text>
                    </h3>
                </Styles.Header>
                <Styles.Description>
                    <Text size="m" color="#767676">
                        {description}
                    </Text>
                </Styles.Description>
                <Styles.Footer>
                    <Styles.HashTagContainer>
                        {hashtags.map((hashtag, index) => (
                            <HashTag key={index}>{hashtag}</HashTag>
                        ))}
                    </Styles.HashTagContainer>
                    <Styles.Icon
                        $isLiked={isLiked}
                        src={isLiked ? iconHeartActive : iconHeartInActive}
                        alt="icon-like"
                        onClick={handleLikeBtnClick}
                    />
                </Styles.Footer>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
