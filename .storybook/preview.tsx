import { Fragment } from "react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Global } from "@emotion/react";

import { globalStyles } from "../src/styles/global";
import { resetStyles } from "../src/styles/reset";
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
            <MemoryRouter>
                <Fragment>
                    <Story />
                    <Global styles={[globalStyles, resetStyles]} />
                </Fragment>
            </MemoryRouter>
        );
    },
};

export default preview;
