import { recommendationFilter } from "@/features/recommend/config/filter";
import { RecommendationFilter } from "@/features/recommend/ui/Filter";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecommendationFilter> = {
    title: "RecommendationFilter",
    component: RecommendationFilter,
};

export default meta;
type Story = StoryObj<typeof RecommendationFilter>;

export const Default: Story = {
    args: {
        className: "w-full max-w-[400px] h-[500px]",
        filters: recommendationFilter,
    },
};
