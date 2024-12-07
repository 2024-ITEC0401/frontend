import { useEffect, useState } from "react";

import { useFetchAllClothes } from "@/features/home/hooks/useFetchAllclothes";
import { FilterState } from "@/features/home/hooks/useFilterCloset";
import { FilterCloset } from "@/features/home/ui/FilterCloset";
import { useGetSpecificCodis } from "@/features/recommend/hooks/useGetSpecificCodis";

import { AddClothModal } from "@/entities/clothes/ui/AddClothModal";
import { ClothCard } from "@/entities/clothes/ui/ClothCard";
import { filterClothes } from "@/entities/clothes/utils/filter";

import { Button } from "@/shared/ui/button";

export default function HomePage() {
    const [filter, setFilter] = useState<FilterState>({
        category: "카테고리를 선택해주세요",
        subCategory: "카테고리를 선택해주세요",
        baseColor: "색상을 선택해주세요",
        pointColor: "색상을 선택해주세요",
        season: "계절을 선택해주세요",
        style: "스타일을 선택해주세요",
    });
    const { data: clothes, isLoading, isError } = useFetchAllClothes();
    const { handleGetSpecificCodis } = useGetSpecificCodis();

    const [isSelected, setIsSelected] = useState(false);
    const [selectedClothes, setSelectedClothes] = useState<number[]>([]);

    const toggleClothSelection = (id: number) => {
        setSelectedClothes((prev) => (prev.includes(id) ? prev.filter((clothId) => clothId !== id) : [...prev, id]));
    };

    const handleToggleSelectMode = () => {
        setIsSelected((prev) => !prev);

        if (isSelected) {
            setSelectedClothes([]);
        }
    };

    const handleAddCodis = () => {
        console.log({ clothing: selectedClothes });
        handleGetSpecificCodis({ clothing: selectedClothes });
        alert("코디 추천 페이지에서 확인해보세요!");

        setSelectedClothes([]);
        setIsSelected(false);
    };

    useEffect(() => {
        console.table(filter);
    }, [filter]);

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

                    <Button variant="outline" className="w-[120px]" onClick={handleToggleSelectMode}>
                        {isSelected ? "선택 모드 해제" : "옷 선택하기"}
                    </Button>
                    <Button
                        variant="outline"
                        className="w-[120px]"
                        disabled={selectedClothes.length === 0}
                        onClick={handleAddCodis}
                    >
                        코디 생성하기
                    </Button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 my-2">
                {filterClothes(clothes, filter)?.map((cloth) => (
                    <ClothCard
                        key={cloth.id}
                        cloth={cloth}
                        isActive={isSelected}
                        isSelected={selectedClothes.includes(cloth.id)}
                        onToggleSelect={toggleClothSelection}
                    />
                ))}
            </div>
        </div>
    );
}
