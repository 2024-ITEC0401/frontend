import { useEffect, useState } from "react";

import { textiles } from "@/entities/clothes/config/textile";

import { SelectItem, Selector } from "@/shared/ui/select";

export interface TextileSelectorProps {
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    onTextileChange?: (textile: string) => void;
}

export const TextileSelector = ({
    className,
    defaultValue,
    placeholder,
    onTextileChange,
    ...props
}: TextileSelectorProps) => {
    const [textile, setTextile] = useState<string>(defaultValue as string);

    useEffect(() => {
        onTextileChange && onTextileChange(textile);
    }, [onTextileChange, textile]);

    return (
        <Selector
            className={className}
            onValueChange={(value) => setTextile(value)}
            placeholder={placeholder}
            value={textile}
            {...props}
        >
            {textiles.map((textile, index) => {
                return (
                    <SelectItem key={index} value={textile.textileValue}>
                        {textile.textileLabel}
                    </SelectItem>
                );
            })}
        </Selector>
    );
};
