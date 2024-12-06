import { fetchAnalyzeInstance } from "@/app/config/analyzeAxios";

import { useMutation } from "@tanstack/react-query";

interface Clothing {
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
}

interface NlCodiRequestBody {
    clothing: Clothing[];
    natural_language: string;
}

interface NlCodiResponseBody {
    clothing_ids: number[];
    description: string;
    haahtags: string[];
    name: string;
}

const nlCodi = async (data: NlCodiRequestBody): Promise<NlCodiResponseBody> => {
    const response = await fetchAnalyzeInstance.post("/get_nl_codi", data);
    return response.data;
};

export const useNlCodi = () => {
    const mutation = useMutation({
        mutationFn: (data: NlCodiRequestBody) => nlCodi(data),
    });

    const handleNlCodi = (data: NlCodiRequestBody) => {
        mutation.mutate(data);
    };

    return { handleNlCodi };
};
