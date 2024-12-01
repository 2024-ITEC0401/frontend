import { category } from "@/entities/clothes/config/category";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface SubCategorySelectorProps extends SelectPrimitive.SelectProps {
    parentCategory: string;
    placeholder?: string;
    className?: string;
}

export const SubCategorySelector = ({ placeholder, parentCategory, className, ...props }: SubCategorySelectorProps) => {
    return (
        <Select {...props}>
            <SelectTrigger className={`w-full ${className || ""}`}>
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
