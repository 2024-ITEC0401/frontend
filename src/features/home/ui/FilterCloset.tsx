import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { RefreshCcw } from "lucide-react";

import { useFilterCloset } from "@/features/home/hooks/useFilterCloset";

import { CategorySelector } from "@/entities/clothes/ui/CategorySelector";
import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";
import { SeasonSelector } from "@/entities/clothes/ui/SeasonSelector";
import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";
import { SubCategorySelector } from "@/entities/clothes/ui/SubCategorySelector";

import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";

export interface FilterClosetProps {
    onFilterChange?: (filter: Record<string, string>) => void;
}

export const FilterCloset = ({ onFilterChange }: FilterClosetProps) => {
    const {
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
    } = useFilterCloset();

    const filter = useMemo(
        () => ({ category, subCategory, baseColor, pointColor, season, style }),
        [baseColor, category, pointColor, season, style, subCategory],
    );

    useEffect(() => {
        onFilterChange && onFilterChange(filter);
    }, [filter, onFilterChange]);

    return (
        <nav className="w-full">
            <ul className="grid w-full gap-1 md:grid-cols-3 lg:grid-cols-7">
                <li className="w-full">
                    <Label>카테고리</Label>
                    <CategorySelector onChange={(value) => setCategory(value)} />
                </li>

                <li className="w-full">
                    <Label>하위 카테고리</Label>
                    <SubCategorySelector
                        placeholder="하위 카테고리"
                        parentCategory={category}
                        onChange={(value) => setSubCategory(value)}
                    />
                </li>

                <li className="w-full">
                    <Label>색상</Label>
                    <ColorSelector placeholder="주 색상" onColorChange={(value) => setBaseColor(value)} />
                </li>

                <li className="w-full">
                    <Label>포인트 색상</Label>
                    <ColorSelector placeholder="포인트 색상" onColorChange={(value) => setPointColor(value)} />
                </li>

                <li className="w-full">
                    <Label>계절</Label>
                    <SeasonSelector placeholder="계절" onChange={(value) => setSeason(value)} />
                </li>

                <li className="w-full">
                    <Label>스타일</Label>
                    <StyleSelector placeholder="스타일" onStyleChange={(value) => setStyle(value)}></StyleSelector>
                </li>

                <li className="flex flex-col justify-end w-full">
                    <Button variant="destructive" className="w-full">
                        <RefreshCcw />
                        핕터 초기화
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
