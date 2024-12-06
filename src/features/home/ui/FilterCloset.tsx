import { useEffect, useMemo } from "react";

import { Filter, RefreshCcw } from "lucide-react";

import { useFilterCloset } from "@/features/home/hooks/useFilterCloset";

import { CategorySelector } from "@/entities/clothes/ui/CategorySelector";
import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";
import { PatternSelector } from "@/entities/clothes/ui/PatternSelector";
import { SeasonSelector } from "@/entities/clothes/ui/SeasonSelector";
import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";
import { SubCategorySelector } from "@/entities/clothes/ui/SubCategorySelector";
import { TextileSelector } from "@/entities/clothes/ui/TextileSelector";

import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";

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
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex w-[90px] min-w-[90px] h-[40px] items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-gray-600 hover:text-white hover:bg-gray-600 transition-colors mr-2">
                    <Filter />
                    필터
                </div>
            </SheetTrigger>
            <SheetContent>
                <ul className="flex flex-col gap-2 mt-[50px]">
                    <h1 className="text-lg font-bold">필터</h1>
                    <li className="w-full">
                        <Label>카테고리</Label>
                        <CategorySelector onValueChange={(value) => setCategory(value)} />
                    </li>

                    <li className="w-full">
                        <Label>하위 카테고리</Label>
                        <SubCategorySelector
                            placeholder="하위 카테고리"
                            parentCategory={category}
                            onValueChange={(value) => setSubCategory(value)}
                        />
                    </li>

                    <li className="w-full">
                        <Label>색상</Label>
                        <ColorSelector placeholder="주 색상" onValueChange={(value) => setBaseColor(value)} />
                    </li>

                    <li className="w-full">
                        <Label>포인트 색상</Label>
                        <ColorSelector placeholder="포인트 색상" onValueChange={(value) => setPointColor(value)} />
                    </li>

                    <li className="w-full">
                        <Label>계절</Label>
                        <SeasonSelector placeholder="계절" onValueChange={(value) => setSeason(value)} />
                    </li>

                    <li className="w-full">
                        <Label>스타일</Label>
                        <StyleSelector placeholder="스타일" onValueChange={(value) => setStyle(value)}></StyleSelector>
                    </li>

                    <li className="w-full">
                        <Label>소재</Label>
                        <TextileSelector
                            placeholder="소재"
                            onValueChange={(value) => setStyle(value)}
                        ></TextileSelector>
                    </li>

                    <li className="w-full">
                        <Label>패턴</Label>
                        <PatternSelector
                            placeholder="패턴"
                            onValueChange={(value) => setStyle(value)}
                        ></PatternSelector>
                    </li>

                    <li className="flex flex-col justify-end w-full">
                        <Button variant="destructive" className="w-full">
                            <RefreshCcw />
                            핕터 초기화
                        </Button>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    );
};
