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
        onSuccess: (data) => {
            console.log("옷 등록 성공:", data);
            alert("옷이 성공적으로 등록되었습니다!");
        },
        onError: (error) => {
            console.error("옷 등록 실패:", error);
            alert("옷 등록에 실패했습니다. 다시 시도해주세요.");
        },
    });
};
