import { useEffect, useState } from "react";

import { colors } from "@/entities/clothes/config/color";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface ColorSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    placeholder?: string;
    onColorChange: (color: string) => void;
}

export const ColorSelector = ({ className, placeholder, onColorChange, ...props }: ColorSelectorProps) => {
    const [color, setColor] = useState<string>("");

    useEffect(() => {
        onColorChange(color);
    }, [color, onColorChange]);

    return (
        <Selector className={className} onValueChange={(value) => setColor(value)} placeholder={placeholder} {...props}>
            {colors.map((color, index) => {
                return (
                    <SelectItem key={index} value={color.colorValue}>
                        <div className="flex items-center w-full h-full gap-2">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.color }}></div>
                            <div>{color.colorLabel}</div>
                        </div>
                    </SelectItem>
                );
            })}
        </Selector>
    );
};
