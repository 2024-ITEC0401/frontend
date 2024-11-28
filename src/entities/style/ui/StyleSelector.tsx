import { useEffect, useState } from "react";

import { styles } from "@/entities/style/config/styles";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface ColorSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    placeholder?: string;
    onStyleChange: (style: string) => void;
}

export const StyleSelector = ({ className, placeholder, onStyleChange, ...props }: ColorSelectorProps) => {
    const [style, setStyle] = useState<string>("");

    useEffect(() => {
        onStyleChange(style);
    }, [style]);

    return (
        <Selector className={className} onValueChange={(value) => setStyle(value)} placeholder={placeholder} {...props}>
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
