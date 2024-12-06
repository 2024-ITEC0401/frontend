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
        cloth: {
            id: 1,
            imageUri: "string",
            name: "코디",
            mainCategory: "상의",
            subCategory: "티셔츠",
            baseColor: "검정",
            pointColor: "회색",
            textile: "면",
            pattern: "무지",
            season: "봄",
            style: "캐주얼",
            description: "기본 무지티",
        },
    },
};
