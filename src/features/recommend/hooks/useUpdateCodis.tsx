import { fetchAnalyzeInstance } from "@/app/config/analyzeAxios";

import { useMutation } from "@tanstack/react-query";

export interface UpdateCodisRequestBody {
    clothing: Array<{
        baseColor: string;
        clothing_id: number;
        description: string;
        mainCategory: string;
        name: string;
        pattern: string;
        pointColor: string;
        season: string;
        style: string;
        subCategory: string;
        textile: string;
    }>;
}
interface UpdateCodisResponseBody {
    codis: Array<{
        clothing_ids: number[];
        description: string;
        hashtags: string[];
        name: string;
    }>;
}
export const updateCodis = async (data: UpdateCodisRequestBody): Promise<UpdateCodisResponseBody> => {
    const reponse = await fetchAnalyzeInstance.post<UpdateCodisResponseBody>("/get_codis", data);
    return reponse.data;
};
export const useUpdateCodis = () => {
    const mutation = useMutation({
        mutationFn: (data: UpdateCodisRequestBody) => updateCodis(data),
        onSuccess: (data) => {
            console.log("codi_data", data);
        },
        onError: (error) => {
            console.error(error);
            alert("코디 생성에 실패하였습니다.");
        },
    });
    const handleUpdateCodis = (data: UpdateCodisRequestBody) => {
        mutation.mutate(data);
    };
    return { handleUpdateCodis };
};
