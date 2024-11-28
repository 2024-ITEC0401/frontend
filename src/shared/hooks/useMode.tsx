import { useCallback, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export enum MODE {
    VIEW = "VIEW",
    EDIT = "EDIT",
}

export const useMode = (defaultMode: MODE) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const mode = useMemo(() => {
        return searchParams.get("mode");
    }, [searchParams]);

    const isEditMode = useMemo(() => {
        return mode === MODE.EDIT;
    }, [mode]);

    const isViewMode = useMemo(() => {
        return mode === MODE.VIEW;
    }, [mode]);

    const switchToViewMode = useCallback(() => {
        setSearchParams({ mode: MODE.VIEW });
    }, [setSearchParams]);

    const switchToEditMode = useCallback(() => {
        setSearchParams({ mode: MODE.EDIT });
    }, [setSearchParams]);

    useEffect(() => {
        if (!mode) setSearchParams({ mode: defaultMode });
    }, [defaultMode, mode, setSearchParams]);

    return {
        mode,
        isEditMode,
        isViewMode,
        switchToViewMode,
        switchToEditMode,
    };
};
