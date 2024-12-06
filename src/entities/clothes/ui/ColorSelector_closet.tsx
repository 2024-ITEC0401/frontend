import { colors_closet } from "@/entities/clothes/config/color_closet";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface ColorSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    placeholder?: string;
    defaultValue?: string;
}

export const ColorSelector_closet = ({ className, defaultValue, ...props }: ColorSelectorProps) => {
    return (
        <Selector className={className} defaultValue={defaultValue} {...props} {...props}>
            {colors_closet.map((color, index) => {
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
