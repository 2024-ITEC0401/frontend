import { colors } from "@/entities/clothes/config/color";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface ColorSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    placeholder?: string;
}

export const ColorSelector = ({ className, ...props }: ColorSelectorProps) => {
    return (
        <Selector className={className} {...props} {...props}>
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
