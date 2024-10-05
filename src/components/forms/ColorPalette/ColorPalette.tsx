import { useEffect, useState } from "react";

import { Color } from "./Color";
import * as Styles from "./ColorPalette.style";

export interface SelectedColor {
    colorLabel: string;
    colorValue: string;
    color: string;
}

export interface ColorPaletteProps {
    width: SizeProp;
    height: SizeProp;
    colors: SelectedColor[];

    defaultSelectedColor?: SelectedColor;

    onChange: (selectedColor: SelectedColor | undefined) => void;
}

export const ColorPalette = (props: ColorPaletteProps) => {
    const [selectedColor, setSelectedColor] = useState<SelectedColor | undefined>(props.defaultSelectedColor);

    useEffect(() => {
        props.onChange(selectedColor);
    }, [selectedColor]);

    return (
        <Styles.Wrapper width={props.width} height={props.height}>
            {props.colors.map((color, index) => {
                return (
                    <Color
                        key={index}
                        colorLabel={color.colorLabel}
                        colorValue={color.colorValue}
                        color={color.color}
                        setSelectedColor={setSelectedColor}
                        active={selectedColor?.colorValue === color.colorValue}
                    />
                );
            })}
        </Styles.Wrapper>
    );
};
