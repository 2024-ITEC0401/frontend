import { useEffect, useState } from "react";

import { category } from "@/entities/clothes/config/category";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

export interface CategorySelectorProps {
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const CategorySelector = ({ placeholder, onChange }: CategorySelectorProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        onChange && onChange(selectedCategory || "");
    }, [onChange, selectedCategory]);

    return (
        <Select onValueChange={(value) => setSelectedCategory(value)}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder || "상위 카테고리"} />
            </SelectTrigger>
            <SelectContent>
                {category.map((category) => {
                    return (
                        <SelectItem key={category.categoryValue} value={category.categoryValue}>
                            {category.categoryLabel}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
};
