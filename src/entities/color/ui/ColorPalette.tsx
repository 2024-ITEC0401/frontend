import { useEffect, useState } from "react";

import { Color } from "@/entities/color/ui/Color";

export interface SelectedColor {
    colorLabel: string;
    colorValue: string;
    color: string;
}

export interface ColorPaletteProps {
    width: string;
    onChange: (selectedColor: SelectedColor | undefined) => void;

    colors: SelectedColor[];
    defaultSelectedColor?: SelectedColor;
}

export const ColorPalette = ({ width, colors, defaultSelectedColor, onChange }: ColorPaletteProps) => {
    const [selectedColor, setSelectedColor] = useState<SelectedColor | undefined>(defaultSelectedColor);

    useEffect(() => {
        onChange(selectedColor);
    }, [selectedColor, onChange]);

    return (
        <div className="flex flex-wrap" style={{ width }}>
            {colors.map((color, index) => {
                return (
                    <Color
                        active={selectedColor?.color === color.color}
                        key={index}
                        colorLabel={color.colorLabel}
                        colorValue={color.colorValue}
                        color={color.color}
                        setSelectedColor={setSelectedColor}
                    />
                );
            })}
        </div>
    );
};
