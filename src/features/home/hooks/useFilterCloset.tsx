import { useState } from "react";

export const useFilterCloset = () => {
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [baseColor, setBaseColor] = useState("");
    const [pointColor, setPointColor] = useState("");
    const [season, setSeason] = useState("");
    const [style, setStyle] = useState("");

    return {
        category,
        subCategory,
        baseColor,
        pointColor,
        season,
        style,
        setCategory,
        setSubCategory,
        setBaseColor,
        setPointColor,
        setSeason,
        setStyle,
    };
};
