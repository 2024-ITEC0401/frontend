import { fetchAnalyzeInstance } from "@/app/config/analyzeAxios";

import { parseClothesAnalysisResponse } from "@/entities/clothes/utils/parser";

import { useMutation } from "@tanstack/react-query";

export interface OutfitInfoResponse {
    baseColor: string;
    mainCategory: string;
    subCategory: string;
    description: string;
    imageUri: string;
    name: string;
    pattern: string;
    pointColor: string;
    season: string;
    style: string;
    textile: string;
}

const uploadOutfitInfoPath = "/get_outfit_info";

const uploadOutfitInfo = async (image: File): Promise<ReturnType<typeof parseClothesAnalysisResponse>> => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetchAnalyzeInstance.post<OutfitInfoResponse>(uploadOutfitInfoPath, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    if (response.status !== 200) {
        throw new Error("이미지 업로드에 실패하였습니다.");
    }

    return parseClothesAnalysisResponse(response.data);
};

export const useFetchOutfitInfo = () => {
    return useMutation<ReturnType<typeof parseClothesAnalysisResponse>, Error, File>({
        mutationFn: uploadOutfitInfo,
    });
};
