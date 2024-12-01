import { useState, useCallback, useReducer } from "react";

import { queryClient } from "@/app/config/axios";

import { useUploadCloth } from "@/features/home/hooks/useUploadCloth";

interface ClothState {
    imageUri?: string;
    name: string;
    description: string;
    category: string;
    subCategory: string;
    color: string;
    pointColor: string;
    season: string;
    style: string;
    textile: string;
    pattern: string;
}

type ClothAction =
    | { type: "SET_IMAGE_URI"; payload: string }
    | { type: "SET_NAME"; payload: string }
    | { type: "SET_DESCRIPTION"; payload: string }
    | { type: "SET_CATEGORY"; payload: string }
    | { type: "SET_SUBCATEGORY"; payload: string }
    | { type: "SET_COLOR"; payload: string }
    | { type: "SET_POINTCOLOR"; payload: string }
    | { type: "SET_SEASON"; payload: string }
    | { type: "SET_STYLE"; payload: string }
    | { type: "SET_TEXTILE"; payload: string }
    | { type: "SET_PATTERN"; payload: string }
    | { type: "RESET" };

const initialState: ClothState = {
    imageUri: "",
    name: "",
    description: "",
    category: "",
    subCategory: "",
    color: "",
    pointColor: "",
    season: "",
    style: "",
    textile: "",
    pattern: "",
};

const clothReducer = (state: ClothState, action: ClothAction): ClothState => {
    switch (action.type) {
        case "SET_IMAGE_URI":
            return { ...state, imageUri: action.payload };
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_DESCRIPTION":
            return { ...state, description: action.payload };
        case "SET_CATEGORY":
            return { ...state, category: action.payload };
        case "SET_SUBCATEGORY":
            return { ...state, subCategory: action.payload };
        case "SET_COLOR":
            return { ...state, color: action.payload };
        case "SET_POINTCOLOR":
            return { ...state, pointColor: action.payload };
        case "SET_SEASON":
            return { ...state, season: action.payload };
        case "SET_STYLE":
            return { ...state, style: action.payload };
        case "SET_TEXTILE":
            return { ...state, textile: action.payload };
        case "SET_PATTERN":
            return { ...state, pattern: action.payload };
        case "RESET":
            return initialState;
        default:
            return state;
    }
};

export const useAddCloth = () => {
    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const [state, dispatch] = useReducer(clothReducer, initialState);
    const { mutate: uploadCloth } = useUploadCloth();

    const validateFields = useCallback(() => {
        const requiredFields = [
            "imageUri",
            "name",
            "description",
            "category",
            "subCategory",
            "color",
            "pointColor",
            "season",
            "style",
            "textile",
            "pattern",
        ];
        const invalid = requiredFields.filter((field) => !state[field as keyof ClothState]);
        setInvalidFields(invalid);
        return invalid.length === 0;
    }, [state]);

    const handleSubmit = useCallback(() => {
        if (!validateFields()) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const requestData = {
            imageUri: state.imageUri || "",
            name: state.name,
            description: state.description,
            mainCategory: state.category,
            subCategory: state.subCategory,
            baseColor: state.color,
            pointColor: state.pointColor,
            season: state.season,
            style: state.style,
            textile: state.textile,
            pattern: state.pattern,
        };

        uploadCloth(requestData, {
            onSuccess: () => {
                console.log("옷 등록 성공:", requestData);
                alert("옷이 성공적으로 등록되었습니다!");

                queryClient.invalidateQueries({ queryKey: ["allClothes"] });

                dispatch({ type: "RESET" });
                setInvalidFields([]);
            },
            onError: (error) => {
                console.log("옷 등록 실패:", requestData);
                console.error("옷 등록 실패:", error);
                alert("옷 등록에 실패했습니다. 다시 시도해주세요.");
            },
        });
    }, [state, uploadCloth, validateFields]);

    const handleReset = useCallback(() => {
        dispatch({ type: "RESET" });
        setInvalidFields([]);
    }, []);

    return {
        handleSubmit,
        handleReset,
        state,
        dispatch,
        invalidFields,
    };
};
