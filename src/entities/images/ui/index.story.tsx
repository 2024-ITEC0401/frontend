import { FileUpload } from "@/entities/images/ui";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FileUpload> = {
    title: "FORMS/FileUpload",
    component: FileUpload,
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
    args: {
        width: "400px",
        height: "300px",
    },
};
