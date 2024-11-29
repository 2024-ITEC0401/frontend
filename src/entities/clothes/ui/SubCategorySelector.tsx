import { useEffect, useState } from "react";

import { category } from "@/entities/clothes/config/category";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

export interface SubCategorySelectorProps {
    placeholder?: string;
    parentCategory: string;
    onChange?: (value: string) => void;
}

export const SubCategorySelector = ({ placeholder, parentCategory, onChange }: SubCategorySelectorProps) => {
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

    useEffect(() => {
        onChange && onChange(selectedSubCategory || "");
    }, [onChange, selectedSubCategory]);

    return (
        <Select onValueChange={(value) => setSelectedSubCategory(value)}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder || "하위 카테고리"} />
            </SelectTrigger>
            <SelectContent>
                {category
                    .find((category) => category.categoryValue === parentCategory)
                    ?.subCategory.map((subCategory) => {
                        return (
                            <SelectItem key={subCategory.categoryValue} value={subCategory.categoryValue}>
                                {subCategory.categoryLabel}
                            </SelectItem>
                        );
                    })}
            </SelectContent>
        </Select>
    );
};
