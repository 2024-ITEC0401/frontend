import { ClothCard } from "@/components/display/ClothCard";

import sampleCodiImg from "@/__mocks__/sample-codi.jpg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClothCard> = {
    title: "display/ClothCard",
    component: ClothCard,
};

export default meta;
type Story = StoryObj<typeof ClothCard>;

export const Default: Story = {
    args: {
        imgSrc: sampleCodiImg,
        title: "흰색 롱 슬리브",
    },
};
