import { useState } from "react";

import { fetchInstance, queryClient } from "@/app/config/axios";

import { useQuery, useQueryClient } from "@tanstack/react-query";

interface CodiDetailResponseBody {
    id: number;
    name: string;
    description: string;
    hashtags: string;
    createdAt: string;
    clothingList: [
        {
            id: number;
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
        },
    ];
}

export const getCodiDetail = async (id: number): Promise<CodiDetailResponseBody> => {
    const response = await fetchInstance.get(`/api/v1/coordination/${id}`);
    return response.data;
};

export const useGetCodiDetail = () => {
    const [id, setId] = useState<number>(0);

    const query = useQuery({
        queryKey: ["codiDetail", id],
        queryFn: () => getCodiDetail(id),
        enabled: !!id,
    });

    const handleGetCodiDetail = (newId: number) => {
        setId(newId);
        queryClient.invalidateQueries({ queryKey: ["codiDetail"] });
    };

    return { handleGetCodiDetail, ...query };
};
