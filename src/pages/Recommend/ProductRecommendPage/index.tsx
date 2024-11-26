import { RecommendedProductCard } from "@/components/display/RecommendedProductCard";
import { SectionHeader } from "@/components/display/SectionHeader";
import { Slider } from "@/components/display/Slider";
import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";

export const ProductRecommendPage = () => {
    const recommendedProducts = [
        { title: "흰색 롱 슬리브", count: 3 },
        { title: "청바지", count: 2 },
        { title: "레더자켓", count: 4 },
        { title: "카고 팬츠", count: 3 },
        { title: "회색 코트", count: 2 },
    ];
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Text size="xl" weight="bold" color="primary">
                    맞춤 상품 추천
                </Text>
                <Slider
                    variant="primary"
                    slidersPerView={4}
                    sliderItems={recommendedProducts}
                    Component={RecommendedProductCard}
                ></Slider>
            </Styles.Container>

            <Styles.Container>
                <Text size="xl" weight="bold" color="primary">
                    카테고리별
                </Text>
                <Styles.Items>
                    <SectionHeader label="상의"></SectionHeader>
                    <Styles.Item>
                        {recommendedProducts.map((product, index) => (
                            <RecommendedProductCard
                                key={index}
                                width="260px"
                                height="300px"
                                title={product.title}
                                count={product.count}
                            />
                        ))}
                    </Styles.Item>
                </Styles.Items>
                <Styles.Items>
                    <SectionHeader label="하의"></SectionHeader>
                    <Styles.Item>
                        {recommendedProducts.map((product, index) => (
                            <RecommendedProductCard
                                key={index}
                                width="260px"
                                height="300px"
                                title={product.title}
                                count={product.count}
                            />
                        ))}
                    </Styles.Item>
                </Styles.Items>
                <Styles.Items>
                    <SectionHeader label="아우터"></SectionHeader>
                    <Styles.Item>
                        {recommendedProducts.map((product, index) => (
                            <RecommendedProductCard
                                key={index}
                                width="260px"
                                height="300px"
                                title={product.title}
                                count={product.count}
                            />
                        ))}
                    </Styles.Item>
                </Styles.Items>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
