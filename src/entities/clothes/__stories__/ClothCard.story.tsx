import { ClothCard } from "@/entities/clothes/ui/ClothCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClothCard> = {
    title: "ClothCard",
    component: ClothCard,
};

export default meta;
type Story = StoryObj<typeof ClothCard>;

export const Default: Story = {
    args: {
        imgSrc: "https://via.placeholder.com/150",
        title: "흰색 롱 슬리브",
        description: "흰색 롱 슬리브입니다.",

        onDelete: () => console.log("onDelete"),
        onEdit: () => console.log("onEdit"),
        onFindMatchingOutfit: () => console.log("onFindMatchingOutfit"),
    },
};
