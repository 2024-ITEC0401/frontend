import { forwardRef } from "react";

import { InputWrapper, InputElement, Label } from "@/components/forms/Input/index.style";

export interface InputProps extends React.ComponentProps<"input"> {
    width: SizeProp;
    height: SizeProp;

    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ width, height, label, ...rest }, ref) => {
    return (
        <InputWrapper width={width} height={height}>
            {label && <Label htmlFor="inputElement">{label}</Label>}
            <InputElement id="inputElement" ref={ref} {...rest} />
        </InputWrapper>
    );
});
