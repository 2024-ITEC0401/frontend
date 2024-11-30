import { useEffect, useState } from "react";

import { patterns } from "@/entities/clothes/config/patterns";

import { SelectItem, Selector } from "@/shared/ui/select";

export interface PatternSelectorProps {
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    onPatternChange?: (pattern: string) => void;
}

export const PatternSelector = ({
    className,
    defaultValue,
    placeholder,
    onPatternChange,
    ...props
}: PatternSelectorProps) => {
    const [pattern, setPattern] = useState<string>(defaultValue as string);

    useEffect(() => {
        onPatternChange && onPatternChange(pattern);
    }, [onPatternChange, pattern]);

    return (
        <Selector
            className={className}
            onValueChange={(value) => setPattern(value)}
            placeholder={placeholder}
            value={pattern}
            {...props}
        >
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
