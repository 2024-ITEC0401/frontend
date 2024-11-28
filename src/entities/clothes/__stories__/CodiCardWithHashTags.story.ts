import { CodiCardWithHashTags } from "@/entities/clothes/ui/CodiCardWithHashTags";

import sampleCodiImg from "@/__mocks__/sample-codi.jpg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CodiCardWithHashTags> = {
    title: "CodiCardWithHashTags",
    component: CodiCardWithHashTags,
};

export default meta;
type Story = StoryObj<typeof CodiCardWithHashTags>;

export const Default: Story = {
    args: {
        title: "코디 제목",
        imgSrc: sampleCodiImg,
        hashTags: ["해시태그1", "해시태그2", "해시태그3"],
    },
};
