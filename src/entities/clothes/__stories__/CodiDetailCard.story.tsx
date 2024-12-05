import { CodiDetailCard } from "@/entities/clothes/ui/CodiDetailCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CodiDetailCard> = {
    title: "CodiDetailCard",
    component: CodiDetailCard,
};

export default meta;
type Story = StoryObj<typeof CodiDetailCard>;

export const Default: Story = {
    args: {
        imgSrc: "https://example.com/image.jpg",
        name: "Sample Name",
        mainCategory: "Main Category",
        subCategory: "Sub Category",
        baseColor: "Base Color",
        pointColor: "Point Color",
        textile: "Textile",
        pattern: "Pattern",
        season: "Season",
        style: "Style",
    },
};
