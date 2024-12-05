import { FilterRecommendation } from "@/features/home/ui/FilterRecommendation";
import { useDeleteCodi } from "@/features/recommend/hooks/useDeleteCodi";
import { useGetAllCodis } from "@/features/recommend/hooks/useGetAllCodis";
import { useGetCodiDetail } from "@/features/recommend/hooks/useGetCodiDetail";

import { CodiDetailModal } from "@/entities/clothes/ui/CodiDetailModal";
import { RecommendedCodiCard } from "@/entities/clothes/ui/RecommendedCodiCard";

export default function RecommendCodiPage() {
    const { data: codis, isFetching } = useGetAllCodis();
    const { handleDeleteCodi } = useDeleteCodi();
    const { data: codiDetail, handleGetCodiDetail } = useGetCodiDetail();

    if (isFetching) return <div>로딩중...</div>;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-indexed, so +1
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}. ${month}.${day}`;
    };

    return (
        <div>
            <div className="sticky top-0 flex items-center justify-between py-1 bg-white border-b-[1px]">
                <div>
                    <h1 className="mt-2 text-xl font-bold">코디 추천</h1>
                    <p className="mb-2 text-sm">총 {codis?.length || 0}개</p>
                </div>
                <div className="flex gap-1">
                    <FilterRecommendation />
                </div>
            </div>
            <section className="flex flex-col gap-2 mt-2 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-full">
                    {codis?.map((codi, index) => (
                        <CodiDetailModal key={index} clothingList={codiDetail?.clothingList || []}>
                            <RecommendedCodiCard
                                imgSrc={codi.clothingImages}
                                title={codi.name}
                                hashTags={codi.hashtags?.split(",").map((tag) => tag.trim())}
                                description={codi.description}
                                createdAt={formatDate(codi.createdAt)}
                                onDelete={() => handleDeleteCodi(codi.id)}
                                onClick={() => handleGetCodiDetail(codi.id)}
                            />
                        </CodiDetailModal>
                    ))}
                </div>
            </section>
        </div>
    );
}
