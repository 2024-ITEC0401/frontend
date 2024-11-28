import { RecommendedProductCard } from "@/entities/clothes/ui/RecommendedProductCard";

import sampleCodiImg from "@/__mocks__/sample-codi.jpg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecommendedProductCard> = {
    title: "RecommendedProductCard",
    component: RecommendedProductCard,
};

export default meta;
type Story = StoryObj<typeof RecommendedProductCard>;

export const Default: Story = {
    args: {
        imgSrc: sampleCodiImg,
        title: "흰색 롱 슬리브",
        count: 2,
    },
};
