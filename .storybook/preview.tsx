import { Fragment } from "react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import "../src/app/styles/tailwind.css";
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
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        );
    },
};

export default preview;
