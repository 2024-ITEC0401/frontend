import { ImageUploader } from "@/entities/images/ui/ImageUploader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImageUploader> = {
    title: "ImageUploader",
    component: ImageUploader,
};

export default meta;
type Story = StoryObj<typeof ImageUploader>;

export const Default: Story = {
    args: {},
};
