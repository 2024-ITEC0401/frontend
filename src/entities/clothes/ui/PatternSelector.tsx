import { patterns } from "@/entities/clothes/config/patterns";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface PatternSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    placeholder?: string;
}

export const PatternSelector = ({ className, placeholder, ...props }: PatternSelectorProps) => {
    return (
        <Selector className={className} placeholder={placeholder} {...props}>
            {patterns.map((pattern, index) => {
                return (
                    <SelectItem key={index} value={pattern.patternValue}>
                        {pattern.patternLabel}
                    </SelectItem>
                );
            })}
        </Selector>
    );
};
