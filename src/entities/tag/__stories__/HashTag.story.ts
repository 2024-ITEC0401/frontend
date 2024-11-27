import HashTag from "@/entities/tag/ui/HashTag";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HashTag> = {
    title: "HashTag",
    component: HashTag,
};

export default meta;
type Story = StoryObj<typeof HashTag>;

export const Default: Story = {
    args: {
        children: "해시태그",
    },
};
