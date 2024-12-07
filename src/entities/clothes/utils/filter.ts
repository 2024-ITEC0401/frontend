import { ClothInfo } from "@/features/home/hooks/useFetchAllclothes";
import { FilterState } from "@/features/home/hooks/useFilterCloset";

export const filterClothes = (clothes?: ClothInfo[], filter?: FilterState) => {
    console.log(clothes);
    console.log(filter);

    if (!clothes) return clothes;
    if (!filter) return clothes;

    return clothes?.filter((cloth) => {
        return Object.keys(filter).every((key) => {
            const filterValue = filter[key as keyof FilterState];
            if (filterValue?.includes("선택해주세요")) return true;

            if (key === "category" && cloth.mainCategory !== filterValue) return false;
            if (key === "subCategory" && cloth.subCategory !== filterValue) return false;
            if (key === "baseColor" && cloth.baseColor !== filterValue) return false;
            if (key === "pointColor" && cloth.pattern !== filterValue) return false;
            if (key === "season" && cloth.season !== filterValue) return false;
            if (key === "style" && cloth.style !== filterValue) return false;

            return true;
        });
    });
};
