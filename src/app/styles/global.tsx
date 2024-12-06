import { css } from "@emotion/react";

import design from "./design.json";

export const globalStyles = css`
    :root {
        --color-primary: ${design.global.primary.value};
        --color-secondary: ${design.global.secondary.value};
        --color-point: ${design.global.point.value};
        --color-red: ${design.global.red.value};
        --color-darkgray: ${design.global.darkgray.value};
        --color-gray: ${design.global.gray.value};
        --color-lightgray: ${design.global.lightgray.value};

        --font-size-2xl: ${design.global["default-2xl"].value}px;
        --font-size-xl: ${design.global["default-xl"].value}px;
        --font-size-l: ${design.global["default-l"].value}px;
        --font-size-m: ${design.global["default-m"].value}px;
        --font-size-s: ${design.global["default-s"].value}px;
        --font-size-xs: ${design.global["default-xs"].value}px;
        --font-size-2xs: ${design.global["default-2xs"].value}px;
    }
`;
