import { fetchAnalyzeInstance } from "@/app/config/analyzeAxios";

import { useMutation } from "@tanstack/react-query";

interface OutfitInfoResponse {
    baseColor: "string";
    description: "string";
    imageUri: "string";
    mainCategory: "string";
    name: "string";
    pattern: "string";
    pointColor: "string";
    season: "string";
    style: "string";
    subCategory: "string";
    textile: "string";
}

const uploadOutfitInfoPath = "/get_outfit_info";

const uploadOutfitInfo = async (image: File): Promise<OutfitInfoResponse> => {
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

    return response.data;
};

export const useFetchOutfitInfo = () => {
    return useMutation<OutfitInfoResponse, Error, File>({
        mutationFn: uploadOutfitInfo,
    });
};
