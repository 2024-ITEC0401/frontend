import { seasons } from "@/entities/clothes/config/season";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface SeasonSelectorProps extends SelectPrimitive.SelectProps {
    placeholder?: string;
}

export const SeasonSelector = ({ placeholder, ...props }: SeasonSelectorProps) => {
    return (
        <Select {...props}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder || "계절"} />
            </SelectTrigger>
            <SelectContent>
                {seasons.map((season) => {
                    return (
                        <SelectItem key={season.seasonValue} value={season.seasonValue}>
                            {season.seasonLabel}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
};
