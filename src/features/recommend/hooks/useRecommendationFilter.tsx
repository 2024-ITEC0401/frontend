import { useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";

export type FilterType = {
    key: string;
    value: string;
};

export const useRecommendationFilter = () => {
    const searchRef = useRef<HTMLInputElement>(null);
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

    const handleSearch = useCallback(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        const key = searchRef.current?.value || "";

        if (newSearchParams.get("search")?.includes(key)) newSearchParams.delete("search");
        else newSearchParams.set("search", key);

        setSearchParams(newSearchParams);
    }, [searchParams]);

    const resetFilter = useCallback(() => {
        setSearchParams("");
    }, []);

    return {
        searchRef,
        searchParams,
        handleFilter,
        handleSearch,
        resetFilter,
    };
};
