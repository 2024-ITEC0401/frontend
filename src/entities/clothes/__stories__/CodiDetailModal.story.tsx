import { CodiDetailModal } from "@/entities/clothes/ui/CodiDetailModal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CodiDetailModal> = {
    title: "CodiDetailModal",
    component: CodiDetailModal,
};

export default meta;
type Story = StoryObj<typeof CodiDetailModal>;

export const Default: Story = {
    args: {},
};
