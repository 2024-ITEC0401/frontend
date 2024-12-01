import { fetchInstance } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

interface DeleteClothResponse {
    message: string;
}

const deleteClothPath = (id: number) => `/api/v1/mycloth/${id}`;

const deleteCloth = async (id: number): Promise<DeleteClothResponse> => {
    const response = await fetchInstance.delete<DeleteClothResponse>(deleteClothPath(id));
    return response.data;
};

export const useDeleteCloth = () => {
    return useMutation<DeleteClothResponse, Error, number>({
        mutationFn: (id) => deleteCloth(id),
        onSuccess: (data) => {
            console.log("Cloth deleted successfully:", data.message);
            alert("옷이 성공적으로 삭제되었습니다!");
        },
        onError: (error) => {
            console.error("Failed to delete cloth:", error);
            alert("옷 삭제에 실패했습니다.");
        },
    });
};
