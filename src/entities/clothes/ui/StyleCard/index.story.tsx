import mockImg from "@/__mocks__/sample-codi.jpg";
import StyleCard from "@/entities/clothes/ui/StyleCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StyleCard> = {
    title: "display/StyleCard",
    component: StyleCard,
};

export default meta;
type Story = StoryObj<typeof StyleCard>;

export const Casual: Story = {
    args: {
        imgSrc: mockImg,
        koreanCategory: "캐주얼",
        englishCategory: "Casual",
    },
};

export const Formal: Story = {
    args: {
        imgSrc: mockImg,
        koreanCategory: "포멀",
        englishCategory: "Formal",
    },
};

export const Sporty: Story = {
    args: {
        imgSrc: mockImg,
        koreanCategory: "스포티",
        englishCategory: "Sporty",
    },
};
