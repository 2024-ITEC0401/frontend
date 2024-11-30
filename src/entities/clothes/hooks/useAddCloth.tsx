import { useCallback, useReducer } from "react";

interface ClothState {
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
    | { type: "SET_NAME"; payload: string }
    | { type: "SET_DESCRIPTION"; payload: string }
    | { type: "SET_CATEGORY"; payload: string }
    | { type: "SET_SUBCATEGORY"; payload: string }
    | { type: "SET_COLOR"; payload: string }
    | { type: "SET_POINTCOLOR"; payload: string }
    | { type: "SET_SEASON"; payload: string }
    | { type: "SET_STYLE"; payload: string }
    | { type: "SET_TEXTILE"; payload: string }
    | { type: "SET_PATTERN"; payload: string };

const clothReducer = (state: ClothState, action: ClothAction): ClothState => {
    switch (action.type) {
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
        default:
            return state;
    }
};

export const useAddCloth = () => {
    const initialState: ClothState = {
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

    const [state, dispatch] = useReducer(clothReducer, initialState);

    const handleSubmit = useCallback(() => {
        //
    }, []);

    const handleDelete = useCallback(() => {
        //
    }, []);

    return {
        handleSubmit,
        handleDelete,

        state,
        dispatch,
    };
};
