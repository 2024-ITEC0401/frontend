import * as Styles from "@/components/display/RecommendedProductCard/index.style";
import { Text } from "@/components/typography/Text";

import Cloth from "@/assets/common/Cloth.png";

export interface RecommendedProductCardProps {
    width: SizeProp;
    height: SizeProp;

    title?: string;
    count?: number;
}

export const RecommendedProductCard = (props: RecommendedProductCardProps) => {
    return (
        <Styles.Wrapper width={props.width} height={props.height}>
            <Styles.ProductImg src={Cloth} />
            <Text size="l" weight="bold">
                {props.title}
            </Text>
            <Styles.Info>
                <Text size="xs" weight="normal" color="darkgray">
                    내 옷장에 있는&nbsp;
                </Text>
                <Text size="xs" weight="normal" color="point">
                    {props.count}개
                </Text>
                <Text size="xs" weight="normal" color="darkgray">
                    의 옷과 잘 어울림
                </Text>
            </Styles.Info>
        </Styles.Wrapper>
    );
};
