import { OutfitInfoResponse } from "@/features/home/hooks/useFetchOutfitInfo";

import { category } from "@/entities/clothes/config/category";
import { colors } from "@/entities/clothes/config/color";
import { patterns } from "@/entities/clothes/config/patterns";
import { seasons } from "@/entities/clothes/config/season";
import { styles } from "@/entities/clothes/config/styles";
import { textiles } from "@/entities/clothes/config/textile";

export const parseClothesAnalysisResponse = (response: OutfitInfoResponse) => {
    const parsedName = response.name;
    const parsedDescription = response.description;

    const parsedCategory = category.find((category) => category.categoryLabel === response.mainCategory)?.categoryValue;

    const parsedSubCategory = category
        .find((category) => category.categoryLabel === response.mainCategory)
        ?.subCategory.find((subcategory) => subcategory.categoryLabel === response.subCategory)?.categoryValue;

    const parsedColor = colors.find((color) => color.colorLabel === response.baseColor)?.colorValue;

    const parsedPointColor = colors.find((color) => color.colorLabel === response.pointColor)?.colorValue;

    const parsedPattern = patterns.find((pattern) => pattern.patternLabel === response.pattern)?.patternValue;

    const parsedSeason = seasons.find((season) => season.seasonLabel === response.season)?.seasonValue;

    const parsedStyle = styles.find((style) => style.krLabel === response.style)?.value;

    const parsedTextile = textiles.find((textile) => textile.textileLabel === response.textile)?.textileValue;

    return {
        name: parsedName,
        description: parsedDescription,
        category: parsedCategory,
        subCategory: parsedSubCategory,
        color: parsedColor,
        pointColor: parsedPointColor,
        pattern: parsedPattern,
        season: parsedSeason,
        style: parsedStyle,
        textile: parsedTextile,
    };
};
