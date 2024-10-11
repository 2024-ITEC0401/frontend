import { SearchBar } from "@/components/forms/SearchBar/index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchBar> = {
    title: "Forms/SearchBar",
    component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        width: "400px",
        height: "55px",
    },
};
