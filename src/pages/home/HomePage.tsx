import { useEffect, useState } from "react";

import { FilterCloset } from "@/features/home/ui/FilterCloset";

import { ClothCard } from "@/entities/clothes/ui/ClothCard";

export default function HomePage() {
    const [filter, setFilter] = useState<Record<string, string>>({});

    useEffect(() => {
        console.table(filter);
    }, [filter]);

    return (
        <div>
            <div className="sticky top-0 py-1 bg-white">
                <h1 className="mt-2 text-xl font-bold">내 옷장</h1>
                <p className="mb-2 text-sm">총 30개</p>

                <FilterCloset onFilterChange={(filter) => setFilter(filter)} />
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 my-2">
                {Array.from({ length: 40 }).map((_, index) => (
                    <ClothCard key={index} title={"옷"} description={"옷 정보"} />
                ))}
            </div>
        </div>
    );
}
