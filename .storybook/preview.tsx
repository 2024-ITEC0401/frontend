import { Fragment } from "react";
import React from "react";

import { globalStyles } from "../src/styles/global";
import { resetStyles } from "../src/styles/reset";
import { Global } from "@emotion/react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: (Story) => {
        return (
            <Fragment>
                <Story />
                <Global styles={[globalStyles, resetStyles]} />
            </Fragment>
        );
    },
};

export default preview;
