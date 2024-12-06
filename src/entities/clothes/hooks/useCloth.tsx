import { useCallback } from "react";

import { ClothInfo } from "@/features/home/hooks/useFetchAllclothes";

import { useMutation } from "@tanstack/react-query";

export const useCloth = (cloth: ClothInfo) => {
    const handleEdit = useCallback(() => {
        //
    }, []);

    const handleRecommend = useCallback(() => {
        //
    }, []);

    const handleDelete = useCallback(() => {
        //
    }, []);

    return { handleEdit, handleRecommend, handleDelete };
};
