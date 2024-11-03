import { RecommendedCodiCard } from "@/components/display/RecommendedCodiCard";
import { Filter } from "@/components/forms/Filter";
import { Text } from "@/components/typography/Text";

import { filterParams } from "@/constants/filterParams";

import * as Styles from "./index.style";
import testImage from "@/__mocks__/sample-codi.jpg";

export default function RecommendCodiPage() {
    return (
        <>
            <Styles.Title>
                <Text size="xl" weight={700}>
                    코디 추천
                </Text>
            </Styles.Title>

            <Styles.Wrapper>
                <Styles.FilterContainer>
                    <Filter width={"100%"} filterParams={filterParams} />
                </Styles.FilterContainer>

                <Styles.CodiContainer>
                    {Array.from({ length: 10 }).map(() => {
                        return (
                            <RecommendedCodiCard
                                width={"100%"}
                                height={"200px"}
                                imgSrc={testImage}
                                title={"여름 깔끔한 실루엣"}
                                createdAt={"2024. 09. 24"}
                                description={
                                    "무더운 여름 에도 깔끔하고 시원하게 입을 수 있는 코디 입니다. 시원한 린넨 바지와 상의와 신발의 포인트 색상을 맞춘 코디 입니다"
                                }
                                hashtags={["#여름", "#깔끔한", "#시원한", "#포인트"]}
                            />
                        );
                    })}
                </Styles.CodiContainer>
            </Styles.Wrapper>
        </>
    );
}
