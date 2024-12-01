import { fetchInstance } from "@/app/config/axios";

import { useQuery } from "@tanstack/react-query";

interface ClothInfo {
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

const fetchAllClothesPath = "/api/v1/mycloth";

const fetchAllClothes = async (): Promise<ClothInfo[]> => {
    const response = await fetchInstance.get<ClothInfo[]>(fetchAllClothesPath);
    return response.data;
};

export const useFetchAllClothes = () => {
    return useQuery<ClothInfo[], Error>({
        queryKey: ["allClothes"],
        queryFn: fetchAllClothes,
    });
};
