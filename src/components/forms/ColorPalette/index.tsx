import { useEffect, useState } from "react";

import { Color } from "@/components/forms/Color";
import * as Styles from "@/components/forms/ColorPalette/index.style";

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

export const ColorPalette = ({ width, height, colors, defaultSelectedColor, onChange }: ColorPaletteProps) => {
    const [selectedColor, setSelectedColor] = useState<SelectedColor | undefined>(defaultSelectedColor);

    useEffect(() => {
        onChange(selectedColor);
    }, [selectedColor, onChange]);

    return (
        <Styles.Wrapper width={width} height={height}>
            {colors.map((color, index) => {
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
