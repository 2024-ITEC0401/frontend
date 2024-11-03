import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";

export interface ClothItemProps {
    imgSrc?: string;
    title: string;
}

export const ClothItem = ({ imgSrc, title }: ClothItemProps) => {
    return (
        <Styles.Wrapper>
            <Styles.Image src={imgSrc} alt="cloth-item-img" />
            <Styles.Title>
                <Text size="m" weight="bold">
                    {title}
                </Text>
            </Styles.Title>
        </Styles.Wrapper>
    );
};
