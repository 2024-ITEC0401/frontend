import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export type FilterType = {
    key: string;
    value: string;
};

export const useRecommendationFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleFilter = useCallback(
        ({ key, value }: FilterType) => {
            const newSearchParams = new URLSearchParams(searchParams);

            if (newSearchParams.get(key)?.includes(value)) newSearchParams.delete(key);
            else newSearchParams.set(key, value);

            setSearchParams(newSearchParams);

            console.log(newSearchParams.toString());
        },
        [searchParams],
    );

    return {
        searchParams,
        handleFilter,
    };
};
