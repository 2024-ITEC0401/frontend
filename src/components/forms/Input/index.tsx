import { forwardRef } from "react";

import { InputWrapper, InputElement, Label } from "@/components/forms/Input/index.style";

export interface InputProps {
    width: SizeProp;
    height: SizeProp;

    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <InputWrapper width={props.width} height={props.height}>
            {props.label && <Label htmlFor="inputElement">{props.label}</Label>}
            <InputElement id="inputElement" ref={ref} />
        </InputWrapper>
    );
});
