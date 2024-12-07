import { useEffect, useMemo } from "react";

import { Filter, RefreshCcw } from "lucide-react";

import { FilterState, useFilterCloset } from "@/features/home/hooks/useFilterCloset";

import { CategorySelector } from "@/entities/clothes/ui/CategorySelector";
import { ColorSelector_closet } from "@/entities/clothes/ui/ColorSelector_closet";
import { PatternSelector } from "@/entities/clothes/ui/PatternSelector";
import { SeasonSelector } from "@/entities/clothes/ui/SeasonSelector";
import { StyleSelector_closet } from "@/entities/clothes/ui/StyleSelector_closet";
import { SubCategorySelector } from "@/entities/clothes/ui/SubCategorySelector";
import { TextileSelector } from "@/entities/clothes/ui/TextileSelector";

import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";

export interface FilterClosetProps {
    onFilterChange?: (filter: FilterState) => void;
}

export const FilterCloset = ({ onFilterChange }: FilterClosetProps) => {
    const {
        category,
        subCategory,
        baseColor,
        pointColor,
        season,
        style,
        textile,
        pattern,
        setCategory,
        setSubCategory,
        setBaseColor,
        setPointColor,
        setSeason,
        setStyle,
        setPattern,
        setTextile,
        initialize,
    } = useFilterCloset();

    const filter = useMemo(
        () => ({ category, subCategory, baseColor, pointColor, season, style, textile, pattern }),
        [baseColor, category, pointColor, season, style, subCategory, textile, pattern],
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
                        <CategorySelector
                            placeholder="카테고리를 선택해주세요"
                            value={category}
                            onValueChange={(value) => setCategory(value)}
                            defaultValue="카테고리를 선택해주세요"
                        />
                    </li>

                    <li className="w-full">
                        <Label>하위 카테고리</Label>
                        <SubCategorySelector
                            value={subCategory}
                            placeholder="카테고리를 선택해주세요"
                            parentCategory={category as string}
                            onValueChange={(value) => setSubCategory(value)}
                            defaultValue="카테고리를 선택해주세요"
                        />
                    </li>

                    <li className="w-full">
                        <Label>색상</Label>
                        <ColorSelector_closet
                            value={baseColor}
                            placeholder="색상을 선택해주세요"
                            onValueChange={(value) => setBaseColor(value)}
                            defaultValue="색상을 선택해주세요"
                        />
                    </li>

                    <li className="w-full">
                        <Label>포인트 색상</Label>
                        <ColorSelector_closet
                            value={pointColor}
                            placeholder="색상을 선택해주세요"
                            onValueChange={(value) => setPointColor(value)}
                            defaultValue="색상을 선택해주세요"
                        />
                    </li>

                    <li className="w-full">
                        <Label>계절</Label>
                        <SeasonSelector
                            value={season}
                            placeholder="계절을 선택해주세요"
                            onValueChange={(value) => setSeason(value)}
                            defaultValue="계절을 선택해주세요"
                        />
                    </li>

                    <li className="w-full">
                        <Label>스타일</Label>
                        <StyleSelector_closet
                            value={style}
                            placeholder="스타일을 선택해주세요"
                            onValueChange={(value) => setStyle(value)}
                            defaultValue="스타일을 선택해주세요"
                        ></StyleSelector_closet>
                    </li>

                    <li className="w-full">
                        <Label>소재</Label>
                        <TextileSelector
                            value={textile}
                            placeholder="재질을 선택해주세요"
                            onValueChange={(value) => setTextile(value)}
                            defaultValue="재질을 선택해주세요"
                        ></TextileSelector>
                    </li>

                    <li className="w-full">
                        <Label>패턴</Label>
                        <PatternSelector
                            value={pattern}
                            placeholder="패턴을 선택해주세요"
                            onValueChange={(value) => setPattern(value)}
                            defaultValue="패턴을 선택해주세요"
                        ></PatternSelector>
                    </li>

                    <li className="flex flex-col justify-end w-full">
                        <Button
                            variant="destructive"
                            className="w-full"
                            onClick={() => {
                                initialize();
                            }}
                        >
                            <RefreshCcw />
                            핕터 초기화
                        </Button>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    );
};
