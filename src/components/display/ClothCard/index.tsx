import { Text } from "@/components/typography/Text/Text";

import * as Styles from "./index.style";

export interface ClothCardProps {
    imgSrc?: string;
    title: string;
}

export const ClothCard = ({ imgSrc, title }: ClothCardProps) => {
    return (
        <Styles.Wrapper>
            <Styles.Image src={imgSrc} alt="cloth-card-img" />
            <Styles.Title>
                <Text size="m" weight="bold">
                    {title}
                </Text>
            </Styles.Title>
        </Styles.Wrapper>
    );
};
