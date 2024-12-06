import { fetchAnalyzeInstance } from "@/app/config/analyzeAxios";

import { useMutation } from "@tanstack/react-query";

interface GetCodisRequestBody {
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
interface GetCodisResponseBody {
    codis: Array<{
        clothing_ids: number[];
        description: string;
        hashtags: string[];
        name: string;
    }>;
}
export const getCodis = async (data: GetCodisRequestBody): Promise<GetCodisResponseBody> => {
    const reponse = await fetchAnalyzeInstance.post<GetCodisResponseBody>("/get_codis", data);
    return reponse.data;
};
export const useGetCodis = () => {
    const mutation = useMutation({
        mutationFn: (data: GetCodisRequestBody) => getCodis(data),
        onSuccess: (data) => {
            console.log("codi_data", data);
        },
        onError: (error) => {
            console.error(error);
            alert("코디 생성에 실패하였습니다.");
        },
    });
    const handleGetCodis = (data: GetCodisRequestBody) => {
        mutation.mutate(data);
    };
    return { handleGetCodis, status: mutation.status, data: mutation.data };
};
