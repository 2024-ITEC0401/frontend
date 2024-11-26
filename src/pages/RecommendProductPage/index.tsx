import { useEffect, useState } from "react";

import axios from "axios";

import { RecommendedProductCard } from "@/components/display/RecommendedProductCard";
import { SectionHeader } from "@/components/display/SectionHeader";
import { Text } from "@/components/typography/Text";

import * as Styles from "./index.style";

interface Product {
    clothId: number;
    imgSrc: string;
    title: string;
    count: number;
    category: string;
}

export const RecommendProductPage = (clothId: number) => {
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
    const [categorizedProducts, setCategorizedProducts] = useState<{ [key: string]: Product[] }>({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>(`/recommend/mycloth/${clothId}`);
                setRecommendedProducts(response.data);

                const categorized = response.data.reduce(
                    (acc, product) => {
                        const category = product.category;
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push(product);
                        return acc;
                    },
                    {} as { [key: string]: Product[] },
                );

                setCategorizedProducts(categorized);
            } catch (error) {
                console.error("추천 상품을 가져오는데 실패했습니다.", error);
            }
        };

        fetchProducts();
    }, [clothId]);

    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Text size="xl" weight="bold" color="primary">
                    맞춤 상품 추천
                </Text>
                <Styles.ColorItem>
                    {recommendedProducts.map((product) => (
                        <RecommendedProductCard
                            key={product.clothId}
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

                {Object.entries(categorizedProducts).map(([category, products]) => (
                    <Styles.Items key={category}>
                        <SectionHeader label={category} />
                        <Styles.Item>
                            {products.map((product) => (
                                <RecommendedProductCard
                                    key={product.clothId}
                                    width="260px"
                                    height="300px"
                                    imgSrc={product.imgSrc}
                                    title={product.title}
                                    count={product.count}
                                />
                            ))}
                        </Styles.Item>
                    </Styles.Items>
                ))}
            </Styles.Container>
        </Styles.Wrapper>
    );
};
