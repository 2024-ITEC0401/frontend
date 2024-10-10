import { Input } from "@/components/forms/Input";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
    title: "Forms/Input",
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        width: "600px",
        height: "100px",

        label: "Label",
    },
};
