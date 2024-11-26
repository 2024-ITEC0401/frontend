import { CodiCardWithHashTags } from "@/entities/clothes/ui/CodiCardWithHashTags";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CodiCardWithHashTags> = {
    title: "Display/CodiCardWithHashTags",
    component: CodiCardWithHashTags,
};

export default meta;
type Story = StoryObj<typeof CodiCardWithHashTags>;

export const Default: Story = {
    args: {
        width: "250px",
        height: "290px",

        title: "여름 깔끔한 실루엣",
        hashTags: ["#여름", "#깔끔한", "#시원한"],
    },
};
