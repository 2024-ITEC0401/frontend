import { SectionHeader } from "@/components/display/SectionHeader";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SectionHeader> = {
    title: "Display/SectionHeader",
    component: SectionHeader,
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
    args: {
        label: "상의",
    },
};
