import { useEffect, useState } from "react";

import { styles } from "@/entities/clothes/config/styles";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface ColorSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    defaultValue?: string;
    placeholder?: string;
    onStyleChange?: (style: string) => void;
}

export const StyleSelector = ({
    className,
    defaultValue,
    placeholder,
    onStyleChange,
    ...props
}: ColorSelectorProps) => {
    const [style, setStyle] = useState<string>(defaultValue as string);

    useEffect(() => {
        onStyleChange && onStyleChange(style);
    }, [onStyleChange, style]);

    return (
        <Selector
            className={className}
            onValueChange={(value) => setStyle(value)}
            placeholder={placeholder}
            value={style}
            {...props}
        >
            {styles.map((style, index) => {
                return (
                    <SelectItem key={index} value={style.value}>
                        {style.krLabel} ({style.enLabel})
                    </SelectItem>
                );
            })}
        </Selector>
    );
};
