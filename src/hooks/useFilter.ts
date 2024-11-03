import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

type handleFilterArgs = { filterValue: string };

export const useFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleFilter = useCallback(
        ({ filterValue }: handleFilterArgs) => {
            const newSearchParams = new URLSearchParams(searchParams.toString());

            const currentValues = newSearchParams.get("filter")?.split(",") || [];

            if (currentValues.includes(filterValue)) {
                const updatedValues = currentValues.filter((value) => value !== filterValue);
                if (updatedValues.length > 0) {
                    newSearchParams.set("filter", updatedValues.join(","));
                } else {
                    newSearchParams.delete("filter");
                }
            } else {
                currentValues.push(filterValue);
                newSearchParams.set("filter", currentValues.join(","));
            }

            setSearchParams(newSearchParams);
        },
        [searchParams, setSearchParams],
    );

    return { searchParams, handleFilter };
};
