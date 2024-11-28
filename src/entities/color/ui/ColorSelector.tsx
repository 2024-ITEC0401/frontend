import { useEffect, useState } from "react";

import { colors } from "@/entities/color/config/color";

import { SelectItem, Selector } from "@/shared/ui/select";

export interface ColorSelectorProps {
    className?: string;
    placeholder?: string;
    onColorChange: (color: string) => void;
}

export const ColorSelector = ({ className, placeholder, onColorChange }: ColorSelectorProps) => {
    const [color, setColor] = useState<string>("");

    useEffect(() => {
        onColorChange(color);
    }, [color]);

    return (
        <Selector className={className} onValueChange={(value) => setColor(value)} placeholder={placeholder}>
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
