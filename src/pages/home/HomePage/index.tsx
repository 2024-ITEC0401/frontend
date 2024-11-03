import { useNavigate } from "react-router-dom";

import { RecommendedProductCard } from "@/components/display/RecommendedProductCard";
import { SectionHeader } from "@/components/display/SectionHeader";
import { Carousel } from "@/components/home/Carousel";
import { Text } from "@/components/typography/Text";

import cloudImg from "@/assets/home/cloud.png";
import rainImg from "@/assets/home/rain.png";
import snowImg from "@/assets/home/snow.png";
import sumImg from "@/assets/home/sun.png";

import * as Styles from "./index.style";

export const HomePage = () => {
    const navigate = useNavigate();
    const carouselImgs = [sumImg, rainImg, cloudImg, snowImg];
    const clothes = [
        { title: "흰색 롱 슬리브", count: 3 },
        { title: "청바지", count: 2 },
        { title: "레더자켓", count: 4 },
        { title: "카고 팬츠", count: 3 },
        { title: "회색 코트", count: 2 },
    ];

    const handleWeatherButtonClick = () => {
        navigate("/recommend/codi");
    };
    return (
        <>
            <Styles.Wrapper>
                <Carousel carouselImgs={carouselImgs}>
                    <Styles.WeatherContainer>
                        <Text size="l" color="#fff">
                            대구광역시 맑음
                        </Text>
                        <Text size="70px" weight="bold" color="#fff">
                            23°C
                        </Text>
                        <Styles.TextContainer>
                            <Text size="l" color="#fff">
                                최고 26°C
                            </Text>
                            <Text size="l" color="#fff">
                                최저 13°C
                            </Text>
                        </Styles.TextContainer>
                        <Text size="l" color="#fff">
                            강수확률 13%
                        </Text>
                        <Styles.WeatherButton onClick={handleWeatherButtonClick}>날씨별 코디 추천</Styles.WeatherButton>
                    </Styles.WeatherContainer>
                </Carousel>

                <Styles.Container>
                    <SectionHeader label="내 옷장" variant="primary" />
                    <Styles.ClothContainer>
                        {clothes.map((cloth, index) => {
                            return (
                                <RecommendedProductCard
                                    key={index}
                                    width="260px"
                                    height="300px"
                                    title={cloth.title}
                                    count={cloth.count}
                                />
                            );
                        })}
                    </Styles.ClothContainer>
                </Styles.Container>
            </Styles.Wrapper>
        </>
    );
};
