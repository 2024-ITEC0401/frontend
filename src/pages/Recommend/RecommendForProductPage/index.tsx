import { ClothItem } from "@/components/display/ClothItem";
import { CodiCardWithHashTags } from "@/components/display/CodiCardWithHashTags";
import { Slider } from "@/components/display/Slider";
import { Text } from "@/components/typography/Text";

import * as Styles from "../ProductRecommendPage/index.style";
import sampleCodiImg from "@/__mocks__/sample-codi.jpg";

export const RecommendForProductPage = () => {
    const products = [
        { imgSrc: sampleCodiImg, title: "흰색 롱 슬리브" },
        { imgSrc: sampleCodiImg, title: "청바지" },
        { imgSrc: sampleCodiImg, title: "레더자켓" },
        { imgSrc: sampleCodiImg, title: "카고 팬츠" },
        { imgSrc: sampleCodiImg, title: "회색 코트" },
        { imgSrc: sampleCodiImg, title: "흰색 롱 슬리브" },
    ];

    const codis = [
        { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#심플한"] },
        { title: "봄 깔끔한 실루엣", hashTags: ["#봄", "#깔끔한", "#심플한"] },
        { title: "가을 깔끔한 실루엣", hashTags: ["#가을", "#깔끔한", "#심플한"] },
        { title: "겨울 깔끔한 실루엣", hashTags: ["#겨울", "#깔끔한", "#심플한"] },
        { title: "깔끔한 실루엣", hashTags: ["#댄디", "#깔끔한", "#심플한"] },
        { title: "봄 깔끔한 실루엣", hashTags: ["#봄", "#깔끔한", "#심플한"] },
    ];
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.TextContainer>
                    <Text size="xl" weight="bold" color="primary">
                        '이 옷'
                    </Text>
                    <Text size="xl" weight="bold">
                        과 어울리는 내 옷장의 아이템
                    </Text>
                </Styles.TextContainer>

                <Slider variant="primary" sliderItems={products} Component={ClothItem}></Slider>
            </Styles.Container>

            <Styles.Container>
                <Styles.TextContainer>
                    <Text size="xl" weight="bold" color="primary">
                        '이 옷'
                    </Text>
                    <Text size="xl" weight="bold">
                        과 어울리는 내 옷장에 없는 추천 아이템
                    </Text>
                </Styles.TextContainer>

                <Slider variant="primary" sliderItems={products} Component={ClothItem}></Slider>
            </Styles.Container>

            <Styles.Container>
                <Styles.TextContainer>
                    <Text size="xl" weight="bold">
                        사용자님이&nbsp;
                    </Text>
                    <Text size="xl" weight="bold" color="primary">
                        가지고 계신 아이템
                    </Text>
                    <Text size="xl" weight="bold">
                        으로는 이런 코디가 가능해요!
                    </Text>
                </Styles.TextContainer>

                <Slider variant="secondary" sliderItems={codis} Component={CodiCardWithHashTags}></Slider>
            </Styles.Container>

            <Styles.Container>
                <Styles.TextContainer>
                    <Text size="xl" weight="bold" color="primary">
                        아이템이 없는 경우
                    </Text>
                    <Text size="xl" weight="bold">
                        는 이런 코디가 가능해요!
                    </Text>
                </Styles.TextContainer>

                <Slider variant="secondary" sliderItems={codis} Component={CodiCardWithHashTags}></Slider>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
