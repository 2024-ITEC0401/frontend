import { textiles } from "@/entities/clothes/config/textile";

import { SelectItem, Selector } from "@/shared/ui/select";

import * as SelectPrimitive from "@radix-ui/react-select";

export interface TextileSelectorProps extends SelectPrimitive.SelectProps {
    className?: string;
    placeholder?: string;
}

export const TextileSelector = ({ className, placeholder, ...props }: TextileSelectorProps) => {
    return (
        <Selector className={className} placeholder={placeholder} {...props}>
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
