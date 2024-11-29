import { ColorSelector } from "@/entities/clothes/ui/ColorSelector";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorSelector> = {
    title: "ColorSelector",
    component: ColorSelector,
};

export default meta;
type Story = StoryObj<typeof ColorSelector>;

export const Default: Story = {
    args: {
        className: "w-full max-w-[400px]",
        placeholder: "선호 색상을 선택해주세요",
        onColorChange: (color: string) => console.log(color),
    },
};
