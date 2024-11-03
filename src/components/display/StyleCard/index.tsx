import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";

export interface StyleCardProps {
    imgSrc: string;
    koreanCategory: string;
    englishCategory: string;
}

const StyleCard = ({ imgSrc, koreanCategory, englishCategory }: StyleCardProps) => {
    return (
        <Styles.Wrapper>
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
