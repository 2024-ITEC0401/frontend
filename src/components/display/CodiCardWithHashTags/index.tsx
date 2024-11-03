import * as Styles from "@/components/display/CodiCardWithHashTags/index.style";
import { HashTag } from "@/components/display/HashTag";
import { Text } from "@/components/typography/Text";

import CodiImg from "@/assets/common/Codi.png";

export interface CodiCardWithHashTagsProps {
    width?: SizeProp;
    height?: SizeProp;

    title: string;
    hashTags: string[];
}

export const CodiCardWithHashTags = (props: CodiCardWithHashTagsProps) => {
    return (
        <Styles.Wrapper width={props.width} height={props.height}>
            <Styles.CodiImg src={CodiImg}></Styles.CodiImg>
            <Text size="m" weight="bold">
                {props.title}
            </Text>
            <Styles.HashTagsContainer>
                {props.hashTags.map((hashTag, index) => (
                    <HashTag key={index}>{hashTag}</HashTag>
                ))}
            </Styles.HashTagsContainer>
        </Styles.Wrapper>
    );
};
