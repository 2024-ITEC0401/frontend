import { RecommendedProductCard } from "@/components/display/RecommendedProductCard";
import { SectionHeader } from "@/components/display/SectionHeader";
import { Text } from "@/components/typography/Text";

import ClothImg from "@/assets/common/Cloth.png";

import * as Styles from "./index.style";

export const RecommendProductPage = () => {
    const recommendedProducts = [
        { imgSrc: ClothImg, title: "흰색 롱 슬리브", count: 3 },
        { imgSrc: ClothImg, title: "청바지", count: 2 },
        { imgSrc: ClothImg, title: "레더자켓", count: 4 },
        { imgSrc: ClothImg, title: "카고 팬츠", count: 3 },
        { imgSrc: ClothImg, title: "회색 코트", count: 2 },
    ];
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Text size="xl" weight="bold" color="primary">
                    맞춤 상품 추천
                </Text>
                <Styles.ColorItem>
                    {recommendedProducts.map((product, index) => (
                        <RecommendedProductCard
                            key={index}
                            width="260px"
                            height="300px"
                            imgSrc={product.imgSrc}
                            title={product.title}
                            count={product.count}
                        />
                    ))}
                </Styles.ColorItem>
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
                                imgSrc={product.imgSrc}
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
                                imgSrc={product.imgSrc}
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
                                imgSrc={product.imgSrc}
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
