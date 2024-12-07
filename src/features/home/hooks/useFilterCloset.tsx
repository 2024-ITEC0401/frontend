import { useReducer } from "react";

export interface FilterState {
    category?: string;
    subCategory?: string;
    baseColor?: string;
    pointColor?: string;
    season?: string;
    style?: string;
    textile?: string;
    pattern?: string;
}

export interface FilterAction {
    type: string;
    payload: string;
}

const initialState: FilterState = {
    category: "카테고리를 선택해주세요",
    subCategory: "카테고리를 선택해주세요",
    baseColor: "색상을 선택해주세요",
    pointColor: "색상을 선택해주세요",
    season: "계절을 선택해주세요",
    style: "스타일을 선택해주세요",
    textile: "재질을 선택해주세요",
    pattern: "패턴을 선택해주세요",
};

const reducer = (state: FilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case "SET_CATEGORY":
            return { ...state, category: action.payload };
        case "SET_SUBCATEGORY":
            return { ...state, subCategory: action.payload };
        case "SET_BASECOLOR":
            return { ...state, baseColor: action.payload };
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
        case "INITIALIZE":
            return initialState;
        default:
            return state;
    }
};

export const useFilterCloset = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setCategory = (category: string) => dispatch({ type: "SET_CATEGORY", payload: category });
    const setSubCategory = (subCategory: string) => dispatch({ type: "SET_SUBCATEGORY", payload: subCategory });
    const setBaseColor = (baseColor: string) => dispatch({ type: "SET_BASECOLOR", payload: baseColor });
    const setPointColor = (pointColor: string) => dispatch({ type: "SET_POINTCOLOR", payload: pointColor });
    const setSeason = (season: string) => dispatch({ type: "SET_SEASON", payload: season });
    const setStyle = (style: string) => dispatch({ type: "SET_STYLE", payload: style });
    const setTextile = (textile: string) => dispatch({ type: "SET_TEXTILE", payload: textile });
    const setPattern = (pattern: string) => dispatch({ type: "SET_PATTERN", payload: pattern });
    const initialize = () => dispatch({ type: "INITIALIZE", payload: "" });

    return {
        ...state,
        setCategory,
        setSubCategory,
        setBaseColor,
        setPointColor,
        setSeason,
        setStyle,
        setTextile,
        setPattern,
        initialize,
    };
};
