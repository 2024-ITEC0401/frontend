import { fetchInstance } from "@/app/config/axios";

import { useQuery } from "@tanstack/react-query";

interface ClothDetailResponse {
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

const fetchClothDetailPath = (id: number) => `/api/v1/mycloth/${id}`;

const fetchClothDetail = async (id: number): Promise<ClothDetailResponse> => {
    const response = await fetchInstance.get<ClothDetailResponse>(fetchClothDetailPath(id));
    return response.data;
};

export const useFetchClothDetail = (id: number) => {
    return useQuery<ClothDetailResponse, Error>({
        queryKey: ["clothDetail", id],
        queryFn: () => fetchClothDetail(id),
        enabled: !!id,
    });
};
