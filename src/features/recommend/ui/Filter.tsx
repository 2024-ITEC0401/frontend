import { Fragment } from "react";

import { RefreshCcw, Search } from "lucide-react";

import { RecommendationFilterType } from "@/features/recommend/config/filter";
import { useRecommendationFilter } from "@/features/recommend/hooks/useRecommendationFilter";

import HashTag from "@/entities/tag/ui/HashTag";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export interface RecommendationFilterProps {
    className?: string;
    filters: RecommendationFilterType[];
}

export const RecommendationFilter = ({ className, filters }: RecommendationFilterProps) => {
    const { handleFilter, resetFilter, handleSearch, searchRef, searchParams } = useRecommendationFilter();

    return (
        <Card className={cn(className, "p-4 lg:sticky top-2 flex-shrink-0 static")}>
            <div className="relative flex gap-2 h-[40px]">
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
                {filters.map((filter, index) => {
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

            <Button className="w-full mt-2" variant="outline" onClick={() => resetFilter()}>
                <RefreshCcw />
                필터 초기화
            </Button>
        </Card>
    );
};
