import ClothImg from "@/assets/common/Cloth.png";

import { RecommendedProductCard } from "@/entities/clothes/ui/RecommendedProductCard";
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

        imgSrc: ClothImg,
        title: "흰색 롱 슬리브",
        count: 2,
    },
};
