import { Text } from "@/components/typography/Text";

import { StyleOption } from "@/pages/myPage/utils/styleList";

import * as Styles from "./index.style";

export interface SelectedCard {
    imgSrc: string;
    koreanCategory: string;
    englishCategory: string;
}

export interface StyleCardProps extends SelectedCard {
    id: number;
    onChange?: (selectedCard: StyleOption | undefined) => void;
    defaultSelectedCard?: SelectedCard;
}

const StyleCard = ({ id, imgSrc, koreanCategory, englishCategory, onChange }: StyleCardProps) => {
    const handleClick = () => {
        if (onChange) {
            onChange({ imgSrc, koreanCategory, englishCategory } as StyleOption);
        }
    };

    return (
        <Styles.Wrapper key={id} onClick={handleClick}>
            <Styles.Image src={imgSrc} alt="style-card-img" />
            <Styles.Category>
                <Styles.KoreanCategory>
                    <Text size="m" weight="bold">
                        {koreanCategory}
                    </Text>
                </Styles.KoreanCategory>
                <Styles.EnglishCategory>
                    <Text size="s" weight="lighter" color="gray">
                        {englishCategory}
                    </Text>
                </Styles.EnglishCategory>
            </Styles.Category>
        </Styles.Wrapper>
    );
};

export default StyleCard;
