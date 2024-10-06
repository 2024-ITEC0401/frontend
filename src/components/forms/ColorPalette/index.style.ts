import { ColorPaletteProps } from "@/components/forms/ColorPalette";

import styled from "@emotion/styled";

export const Wrapper = styled.div<Pick<ColorPaletteProps, "width" | "height">>`
    display: flex;
    flex-wrap: wrap;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
