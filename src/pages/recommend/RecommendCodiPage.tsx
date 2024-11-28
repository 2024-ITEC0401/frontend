import { recommendationFilter } from "@/features/recommend/config/filter";
import { RecommendationFilter } from "@/features/recommend/ui/Filter";

import { RecommendedCodiCard } from "@/entities/clothes/ui/RecommendedCodiCard";

import sampleImage from "@/__mocks__/BlackShirt.png";

export default function RecommendCodiPage() {
    return (
        <div>
            <h1 className="my-4 text-xl font-bold">코디 추천</h1>

            <section className="flex flex-col gap-2 lg:flex-row">
                <RecommendationFilter filters={recommendationFilter} className="lg:w-[30%] h-fit sticky" />
                <div className="flex flex-col gap-2 lg:w-auto">
                    {Array.from({ length: 10 }).map((_, key) => {
                        return (
                            <RecommendedCodiCard
                                key={key}
                                imgSrc={sampleImage}
                                title={"여름 깔끔한 실루엣"}
                                hashTags={["여름", "깔끔", "시원"]}
                                description={
                                    "무더운 여름 에도 깔끔하고 시원하게 입을 수 있는 코디 입니다. 시원한 린넨 바지와 상의와 신발의 포인트 색상을 맞춘 코디 입니다"
                                }
                                createdAt={"2024. 09.24"}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
