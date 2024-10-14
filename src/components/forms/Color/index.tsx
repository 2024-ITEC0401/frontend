import { useCallback } from "react";

import * as Styles from "@/components/forms/Color/index.style";
import { SelectedColor } from "@/components/forms/ColorPalette";
import { Text } from "@/components/typography/Text";

export interface ColorProps extends SelectedColor {
    active?: boolean;
    setSelectedColor?: React.Dispatch<React.SetStateAction<SelectedColor | undefined>>;
}

export const Color = (props: ColorProps) => {
    const handleClick = useCallback(() => {
        if (props.setSelectedColor) {
            props.setSelectedColor({
                color: props.color,
                colorLabel: props.colorLabel,
                colorValue: props.colorValue,
            });
        }
    }, []);

    return (
        <Styles.Wrapper>
            <Styles.Container active={props.active} color={props.color} onClick={handleClick}>
                <Styles.Item color={props.color} />
            </Styles.Container>
            <Styles.Label>
                <Text size="s">{props.colorLabel}</Text>
            </Styles.Label>
        </Styles.Wrapper>
    );
};
