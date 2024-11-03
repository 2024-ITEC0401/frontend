import ArrowButton from "@/components/forms/Button/ArrowButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ArrowButton> = {
    title: "forms/button/ArrowButton",
    component: ArrowButton,
    argTypes: {
        direction: {
            options: ["left", "right"],
            description: "화살표 방향 (왼쪽 또는 오른쪽)",
        },
        onClick: { action: "clicked" },
    },
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Left: Story = {
    args: {
        direction: "left",
    },
};

export const Right: Story = {
    args: {
        direction: "right",
    },
};
