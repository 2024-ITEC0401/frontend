import { RecommendedProductCard } from "@/components/display/RecommendedProductCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecommendedProductCard> = {
    title: "Display/RecommendedProductCard",
    component: RecommendedProductCard,
};

export default meta;
type Story = StoryObj<typeof RecommendedProductCard>;

export const Default: Story = {
    args: {
        width: "280px",
        height: "320px",

        count: 2,
    },
};
