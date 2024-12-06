import { fetchInstance } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

interface ClothUploadRequest {
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

interface ClothUploadResponse {
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

const uploadClothPath = "/api/v1/mycloth/upload";

const uploadCloth = async (data: ClothUploadRequest): Promise<ClothUploadResponse> => {
    const response = await fetchInstance.post<ClothUploadResponse>(uploadClothPath, data);
    return response.data;
};

export const useUploadCloth = () => {
    return useMutation<ClothUploadResponse, Error, ClothUploadRequest>({
        mutationFn: uploadCloth,
    });
};
