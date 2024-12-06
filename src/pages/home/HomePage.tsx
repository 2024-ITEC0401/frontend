import { useEffect, useState } from "react";

import { useFetchAllClothes } from "@/features/home/hooks/useFetchAllclothes";
import { FilterCloset } from "@/features/home/ui/FilterCloset";

import { AddClothModal } from "@/entities/clothes/ui/AddClothModal";
import { ClothCard } from "@/entities/clothes/ui/ClothCard";

export default function HomePage() {
    const [filter, setFilter] = useState<Record<string, string>>({});
    const { data: clothes, isLoading, isError } = useFetchAllClothes();

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (isError) {
        return <div>옷 데이터를 가져오는 중에 문제가 발생했습니다.</div>;
    }

    return (
        <div>
            <div className="sticky top-0 flex items-center justify-between py-1 bg-white">
                <div>
                    <h1 className="mt-2 text-xl font-bold">내 옷장</h1>
                    <p className="mb-2 text-sm">총 {clothes?.length || 0}개</p>
                </div>

                <div className="flex gap-1">
                    <FilterCloset onFilterChange={(filter) => setFilter(filter)} />
                    <AddClothModal />
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 my-2">
                {clothes?.map((cloth) => <ClothCard key={cloth.id} cloth={cloth} />)}
            </div>
        </div>
    );
}
