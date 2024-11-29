import { AddClothModal } from "@/entities/clothes/ui/AddClothModal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AddClothModal> = {
    title: "AddClothModal",
    component: AddClothModal,
};

export default meta;
type Story = StoryObj<typeof AddClothModal>;

export const Default: Story = {
    args: {},
};
