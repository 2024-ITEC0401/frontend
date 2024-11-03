import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

type handleFilterArgs = { filterKey: string; filterValue: string };

export const useFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleFilter = useCallback(
        ({ filterKey, filterValue }: handleFilterArgs) => {
            const newSearchParams = new URLSearchParams(searchParams.toString());

            const currentValues = newSearchParams.getAll(filterKey);

            if (currentValues.includes(filterValue)) {
                const updatedValues = currentValues.filter((value) => value !== filterValue);
                newSearchParams.delete(filterKey);
                updatedValues.forEach((value) => newSearchParams.append(filterKey, value));
            } else {
                newSearchParams.append(filterKey, filterValue);
            }

            setSearchParams(newSearchParams);
        },
        [searchParams, setSearchParams],
    );

    return { searchParams, handleFilter };
};
