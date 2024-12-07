import { fetchInstance } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

interface GetSpecificCodisRequestBody {
    clothing: number[];
}

export const getSpecificCodis = async (data: GetSpecificCodisRequestBody): Promise<void> => {
    await fetchInstance.post("/api/v1/coordination/rec/basic", data);
};

export const useGetSpecificCodis = () => {
    const mutation = useMutation({
        mutationFn: (data: GetSpecificCodisRequestBody) => getSpecificCodis(data),
        onError: (error) => {
            console.error(error);
            alert("코디 생성에 실패하였습니다.");
        },
    });

    const handleGetSpecificCodis = (data: GetSpecificCodisRequestBody) => {
        mutation.mutate(data);
    };

    return { handleGetSpecificCodis };
};
