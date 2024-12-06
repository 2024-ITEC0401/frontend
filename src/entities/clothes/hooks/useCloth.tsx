import { useCallback } from "react";

import { queryClient } from "@/app/config/query";

import { useDeleteCloth } from "@/features/home/hooks/useDeleteCloth";
import { ClothInfo } from "@/features/home/hooks/useFetchAllclothes";
import { useUpdateCloth } from "@/features/home/hooks/useUpdateCloth";

export const useCloth = (cloth: ClothInfo) => {
    const { mutate: updateCloth } = useUpdateCloth();
    const { mutate: deleteCloth } = useDeleteCloth();

    const handleEdit = useCallback(
        (updatedData: Omit<ClothInfo, "id">) => {
            updateCloth(
                { id: cloth.id, data: updatedData },
                {
                    onSuccess: () => {
                        queryClient.invalidateQueries({ queryKey: ["allClothes"] });
                    },
                },
            );
        },
        [cloth.id, updateCloth],
    );

    const handleDelete = useCallback(() => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            deleteCloth(cloth.id, {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ["allClothes"] });
                },
            });
        }
    }, [cloth.id, deleteCloth]);

    const handleRecommend = useCallback(() => {
        alert("추천 기능은 아직 구현되지 않았습니다.");
    }, []);

    return { handleEdit, handleRecommend, handleDelete };
};
