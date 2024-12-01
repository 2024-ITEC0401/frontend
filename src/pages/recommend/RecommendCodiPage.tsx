import { useEffect } from "react";

import { useFetchAllClothes } from "@/features/home/hooks/useFetchAllclothes";
import { FilterRecommendation } from "@/features/home/ui/FilterRecommendation";
import { useGetCodis } from "@/features/recommend/hooks/useGetCodis";

import { RecommendedCodiCard } from "@/entities/clothes/ui/RecommendedCodiCard";
import { parseClothInfo } from "@/entities/clothes/utils/parserReverse";

interface Cloth {
    id: number;
    imageUri: string;
    name: string;
    mainCategory: string;
    subCategory: string;
    baseColor: string;
    pointColor: string;
    textile: string;
    pattern: string;
    season: string;
    style: string;
    description: string;
}
export default function RecommendCodiPage() {
    const { data: clothes, isLoading: isfetchingClothes } = useFetchAllClothes();
    const { handleGetCodis, status: getCodisStatus, data: codis } = useGetCodis();
    console.log("clothes", clothes);
    const handleTransformData = (clothes: Cloth[]) => ({
        clothing: clothes.map((cloth) =>
            parseClothInfo({
                baseColor: cloth.baseColor,
                clothing_id: cloth.id,
                description: cloth.description,
                mainCategory: cloth.mainCategory,
                name: cloth.name,
                pattern: cloth.pattern,
                pointColor: cloth.pointColor,
                season: cloth.season,
                style: cloth.style,
                subCategory: cloth.subCategory,
                textile: cloth.textile,
            }),
        ),
    });
    useEffect(() => {
        if (clothes) {
            const data = handleTransformData(clothes);
            console.log("transform data", data);
            handleGetCodis(data);
        }
    }, []);
    if (isfetchingClothes || getCodisStatus === "pending") return <div>Loading...</div>;
    console.log("codis", codis);
    return (
        <div>
            <div className="sticky top-0 flex items-center justify-between py-1 bg-white border-b-[1px]">
                <div>
                    <h1 className="mt-2 text-xl font-bold">코디 추천</h1>
                    <p className="mb-2 text-sm">총 {codis?.codis?.length || 0}개</p>
                </div>
                <div className="flex gap-1">
                    <FilterRecommendation />
                </div>
            </div>
            <section className="flex flex-col gap-2 mt-2 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-full">
                    {codis?.codis?.map((codi, index) => (
                        <RecommendedCodiCard
                            key={index}
                            imgSrc={codi.clothing_ids.map(
                                (id) => clothes?.find((cloth) => cloth.id === id)?.imageUri || "gray",
                            )}
                            title={codi.name}
                            hashTags={codi.hashtags}
                            description={codi.description}
                            createdAt={"2024. 09.24"}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
