import { StyleSelector } from "@/entities/clothes/ui/StyleSelector";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StyleSelector> = {
    title: "StyleSelector",
    component: StyleSelector,
};

export default meta;
type Story = StoryObj<typeof StyleSelector>;

export const Default: Story = {
    args: {
        className: "w-full max-w-[400px]",
        placeholder: "스타일을 선택해주세요",
        onValueChange: (style: string) => {
            console.log(style);
        },
    },
};
