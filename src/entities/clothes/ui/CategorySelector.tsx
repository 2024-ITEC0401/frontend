import { category } from "@/entities/clothes/config/category";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface CategorySelectorProps extends SelectPrimitive.SelectProps {
    placeholder?: string;
    className?: string;
}

export const CategorySelector = ({ placeholder, className, ...props }: CategorySelectorProps) => {
    return (
        <Select {...props}>
            <SelectTrigger className={`w-full ${className || ""}`}>
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
