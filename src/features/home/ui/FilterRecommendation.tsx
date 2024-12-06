import { Fragment } from "react";

import { Filter, RefreshCcw, Search } from "lucide-react";

import { recommendationFilter } from "@/features/recommend/config/filter";
import { useRecommendationFilter } from "@/features/recommend/hooks/useRecommendationFilter";

import HashTag from "@/entities/tag/ui/HashTag";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";

export const FilterRecommendation = () => {
    const { handleFilter, resetFilter, handleSearch, searchRef, searchParams } = useRecommendationFilter();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-gray-600 hover:text-white hover:bg-gray-600 transition-colors">
                    <Filter />
                    필터
                </div>
            </SheetTrigger>

            <SheetContent>
                <div className="relative flex gap-2 h-[40px] mt-[60px]">
                    <Input
                        ref={searchRef}
                        placeholder="검색"
                        className="absolute rounded-full h-[40px]"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }}
                    ></Input>
                    <Button
                        className="absolute right-0 rounded-full h-[40px] w-[40px] flex flex-center justify-center"
                        onClick={handleSearch}
                    >
                        <Search size={4} />
                    </Button>
                </div>

                <div className="my-1">
                    {recommendationFilter.map((filter, index) => {
                        return (
                            <Fragment key={index}>
                                <Label className="font-semibold text-gray-500">{filter.label}</Label>
                                <div className="flex flex-wrap gap-2 my-1">
                                    {filter.tags?.map((tag, index) => {
                                        return (
                                            <HashTag
                                                key={index}
                                                className={cn("hover:cursor-pointer")}
                                                onClick={() => {
                                                    handleFilter({
                                                        key: filter.key,
                                                        value: tag.value,
                                                    });
                                                    console.log(filter.key, tag.value);
                                                }}
                                                active={searchParams.get(filter.key)?.includes(tag.value)}
                                            >
                                                {tag.label}
                                            </HashTag>
                                        );
                                    })}
                                </div>
                            </Fragment>
                        );
                    })}
                </div>

                <div
                    className="w-full mt-2 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 cursor-pointer hover:bg-gray-100 hover:border-gray-400 transition-colors"
                    onClick={() => resetFilter()}
                >
                    <RefreshCcw />
                    필터 초기화
                </div>
            </SheetContent>
        </Sheet>
    );
};
