import { Color } from "@/entities/color/ui/Color";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Color> = {
    title: "Color",
    component: Color,
    argTypes: {
        color: {
            control: { type: "color" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Color>;

export const Default: Story = {
    args: {
        colorLabel: "빨간색",
        colorValue: "COLOR_RED",
        color: "#ff0000",
        active: true,
    },
};
