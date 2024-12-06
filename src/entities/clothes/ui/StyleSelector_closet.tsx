import { styles_closet } from "@/entities/clothes/config/styles_closet";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface ColorSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    placeholder?: string;
}

export const StyleSelector_closet = ({ className, placeholder, ...props }: ColorSelectorProps) => {
    return (
        <Selector className={className} placeholder={placeholder} {...props}>
            {styles_closet.map((style, index) => {
                return (
                    <SelectItem key={index} value={style.value}>
                        {style.krLabel} ({style.enLabel})
                    </SelectItem>
                );
            })}
        </Selector>
    );
};
