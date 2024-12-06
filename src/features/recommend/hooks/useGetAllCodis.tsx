import { fetchInstance } from "@/app/config/axios";

import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface GetAllCodisResponse {
    id: number;
    name: string;
    description: string;
    hashtags: string;
    createdAt: string;
    clothingImages: string[];
}
type GetAllCodisResponseBody = GetAllCodisResponse[];

export const getAllCodis = async (): Promise<GetAllCodisResponseBody> => {
    const response = await fetchInstance.get<GetAllCodisResponseBody>("/api/v1/coordination");
    return response.data;
};

export const useGetAllCodis = (): UseQueryResult<GetAllCodisResponseBody> => {
    const query = useQuery({
        queryKey: ["allCodis"],
        queryFn: getAllCodis,
    });

    return { ...query };
};
