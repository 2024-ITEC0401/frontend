import { useEffect, useState } from "react";

import axios from "axios";

import { RecommendedCodiCard } from "@/components/display/RecommendedCodiCard";
import { Filter } from "@/components/forms/Filter";
import { Text } from "@/components/typography/Text";

import { filterParams } from "@/constants/filterParams";

import * as Styles from "./index.style";

export interface Codi {
    clothId: number;
    imgSrc: string;
    title: string;
    createdAt: string;
    description: string;
    hashtags: string[];
}

export default function RecommendCodiPage() {
    const [codiData, setCodiData] = useState<Codi[]>([]);

    useEffect(() => {
        const fetchCodiData = async () => {
            try {
                const response = await axios.get<Codi[]>("/recommend/mycloth", {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN as string}`,
                    },
                });
                setCodiData(response.data);
            } catch (error) {
                console.error("Failed to fetch codi data:", error);
            }
        };

        fetchCodiData();
    }, []);

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
                    {codiData.map((codi) => (
                        <RecommendedCodiCard
                            key={codi.clothId}
                            width={"100%"}
                            height={"200px"}
                            imgSrc={codi.imgSrc}
                            title={codi.title}
                            createdAt={codi.createdAt}
                            description={codi.description}
                            hashtags={codi.hashtags}
                        />
                    ))}
                </Styles.CodiContainer>
            </Styles.Wrapper>
        </>
    );
}
