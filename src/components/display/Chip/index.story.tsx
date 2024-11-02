import { Chip } from "@/components/display/Chip";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Chip> = {
    component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        active: true,
        children: "웜톤",
    },
    argTypes: {
        active: {
            options: [true, false],
            control: { type: "radio" },
        },
    },
};
