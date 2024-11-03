import { useCallback } from "react";

import * as Styles from "@/components/forms/Color/index.style";
import { SelectedColor } from "@/components/forms/ColorPalette";
import { Text } from "@/components/typography/Text";

export interface ColorProps extends SelectedColor {
    active?: boolean;
    setSelectedColor?: React.Dispatch<React.SetStateAction<SelectedColor | undefined>>;
}

export const Color = ({ setSelectedColor, color, colorLabel, colorValue, active }: ColorProps) => {
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
        <Styles.Wrapper>
            <Styles.Container active={active} color={color} onClick={handleClick}>
                <Styles.Item color={color} />
            </Styles.Container>
            <Styles.Label>
                <Text size="s">{colorLabel}</Text>
            </Styles.Label>
        </Styles.Wrapper>
    );
};
