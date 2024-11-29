import { FilterRecommendation } from "@/features/home/ui/FilterRecommendation";

import { RecommendedCodiCard } from "@/entities/clothes/ui/RecommendedCodiCard";

import sampleImage from "@/__mocks__/BlackShirt.png";

export default function RecommendCodiPage() {
    return (
        <div>
            <div className="sticky top-0 flex items-center justify-between py-1 bg-white border-b-[1px]">
                <div>
                    <h1 className="mt-2 text-xl font-bold">코디 추천</h1>
                    <p className="mb-2 text-sm">총 30개</p>
                </div>
                <div className="flex gap-1">
                    <FilterRecommendation />
                </div>
            </div>

            <section className="flex flex-col gap-2 mt-2 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-full">
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
