import { fetchInstance, queryClient } from "@/app/config/axios";

import { useMutation } from "@tanstack/react-query";

export const deleteCodi = async (id: number): Promise<void> => {
    await fetchInstance.delete(`/api/v1/coordination/${id}`);
};

export const useDeleteCodi = () => {
    const mutation = useMutation({
        mutationFn: (id: number) => deleteCodi(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["allCodis"] });
        },
        onError: () => {
            alert("삭제에 실패했습니다. 다시 시도해주세요.");
        },
    });

    const handleDeleteCodi = (id: number) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            mutation.mutate(id);
        }
    };
    return { handleDeleteCodi };
};
