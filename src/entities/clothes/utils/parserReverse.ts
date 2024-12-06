import { category } from "@/entities/clothes/config/category";
import { colors } from "@/entities/clothes/config/color";
import { patterns } from "@/entities/clothes/config/patterns";
import { seasons } from "@/entities/clothes/config/season";
import { styles } from "@/entities/clothes/config/styles";
import { textiles } from "@/entities/clothes/config/textile";

interface ClothInfo {
    baseColor: string;
    clothing_id: number;
    description: string;
    mainCategory: string;
    name: string;
    pattern: string;
    pointColor: string;
    season: string;
    style: string;
    subCategory: string;
    textile: string;
}

export const parseClothInfo = (cloth: ClothInfo) => {
    const parsedColor = colors.find((color) => color.colorValue === cloth.baseColor)?.colorLabel || "알 수 없음";
    const parsedId = cloth.clothing_id;
    const parsedDescription = cloth.description || "설명 없음";
    const parsedCategory =
        category.find((category) => category.categoryValue === cloth.mainCategory)?.categoryLabel || "알 수 없음";
    const parsedName = cloth.name || "이름 없음";
    const parsedPattern =
        patterns.find((pattern) => pattern.patternValue === cloth.pattern)?.patternLabel || "무늬 없음";
    const parsedPointColor = colors.find((color) => color.colorValue === cloth.pointColor)?.colorLabel || "알 수 없음";
    const parsedSeason = seasons.find((season) => season.seasonValue === cloth.season)?.seasonLabel || "계절 없음";
    const parsedStyle = styles.find((style) => style.value === cloth.style)?.krLabel || "스타일 없음";
    const parsedSubCategory =
        category
            .find((category) => category.categoryValue === cloth.mainCategory)
            ?.subCategory.find((subcategory) => subcategory.categoryValue === cloth.subCategory)?.categoryLabel ||
        "소분류 없음";
    const parsedTextile =
        textiles.find((textile) => textile.textileValue === cloth.textile)?.textileLabel || "소재 없음";

    return {
        baseColor: parsedColor,
        clothing_id: parsedId,
        description: parsedDescription,
        mainCategory: parsedCategory,
        name: parsedName,
        pattern: parsedPattern,
        pointColor: parsedPointColor,
        season: parsedSeason,
        style: parsedStyle,
        subCategory: parsedSubCategory,
        textile: parsedTextile,
    };
};
