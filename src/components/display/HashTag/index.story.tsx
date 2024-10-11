import { HashTag } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HashTag> = {
    title: "Display/HashTag",
    component: HashTag,
};

export default meta;
type Story = StoryObj<typeof HashTag>;

export const Default: Story = {
    args: {
        children: "#태그",
    },
};
