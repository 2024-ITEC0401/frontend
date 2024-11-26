import sampleCodiImg from "@/__mocks__/sample-codi.jpg";
import { ClothItem } from "@/entities/clothes/ui/ClothItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClothItem> = {
    title: "display/ClothItem",
    component: ClothItem,
};

export default meta;
type Story = StoryObj<typeof ClothItem>;

export const Default: Story = {
    args: {
        imgSrc: sampleCodiImg,
        title: "흰색 롱 슬리브",
    },
};
