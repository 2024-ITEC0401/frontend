import { StyleCard } from "@/entities/style/ui/StyleCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StyleCard> = {
    title: "StyleCard",
    component: StyleCard,
};

export default meta;
type Story = StoryObj<typeof StyleCard>;

export const Default: Story = {
    args: {
        imgSrc: "https://via.placeholder.com/240",
        krLabel: "스타일",
        enLabel: "Style",
    },
};
