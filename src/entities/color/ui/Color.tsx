import { useCallback } from "react";

import { SelectedColor } from "@/entities/color/ui/ColorPalette";

export interface ColorProps extends SelectedColor {
    active?: boolean;
    setSelectedColor?: React.Dispatch<React.SetStateAction<SelectedColor | undefined>>;
}

export const Color = ({ color, setSelectedColor, colorLabel, colorValue, active }: ColorProps) => {
    const handleClick = useCallback(() => {
        if (setSelectedColor) {
            setSelectedColor({
                color: color,
                colorLabel: colorLabel,
                colorValue: colorValue,
            });
        }
    }, [color, colorLabel, colorValue, setSelectedColor]);

    return (
        <div className="flex flex-col w-[60px] h-fit m-1 hover:cursor-pointer">
            <div
                className="w-[60px] h-[60px] p-1 border-4 rounded-full"
                style={{ borderColor: active ? color : "#E3E3E3" }}
                onClick={handleClick}
            >
                <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
            </div>
            <p className="font-bold text-center">{colorLabel}</p>
        </div>
    );
};
