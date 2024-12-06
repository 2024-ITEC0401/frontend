import { fetchInstance } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

interface UpdateClothRequest {
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

interface UpdateClothResponse {
    message: string;
}

const updateClothPath = (id: number) => `/api/v1/mycloth/${id}`;

const updateCloth = async (id: number, data: UpdateClothRequest): Promise<UpdateClothResponse> => {
    const response = await fetchInstance.put<UpdateClothResponse>(updateClothPath(id), data);
    return response.data;
};

export const useUpdateCloth = () => {
    return useMutation<UpdateClothResponse, Error, { id: number; data: UpdateClothRequest }>({
        mutationFn: ({ id, data }) => updateCloth(id, data),
        onSuccess: () => {
            alert("옷 정보가 성공적으로 업데이트되었습니다!");
        },
        onError: () => {
            alert("옷 정보 업데이트에 실패했습니다.");
        },
    });
};
