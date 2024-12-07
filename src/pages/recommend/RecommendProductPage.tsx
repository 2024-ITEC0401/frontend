import { useEffect, useState } from "react";

import { FilterState } from "@/features/home/hooks/useFilterCloset";
import { FilterCloset } from "@/features/home/ui/FilterCloset";

import { RecommendedProductCard } from "@/entities/clothes/ui/RecommendedProductCard";

export default function RecommendProductPage() {
    const [filter, setFilter] = useState<FilterState>({});

    useEffect(() => {
        console.table(filter);
    }, [filter]);

    return (
        <div>
            <div className="sticky top-0 flex items-center justify-between py-1 bg-white">
                <div>
                    <h1 className="mt-2 text-xl font-bold">맞춤 상품 추천</h1>
                    <p className="mb-2 text-sm">총 30개</p>
                </div>
                <div className="flex gap-1">
                    <FilterCloset onFilterChange={(filter) => setFilter(filter)} />
                </div>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-center my-2">
                {Array.from({ length: 30 }).map((_, key) => {
                    return <RecommendedProductCard key={key} title={"흰티"} count={3} />;
                })}
            </div>
        </div>
    );
}
