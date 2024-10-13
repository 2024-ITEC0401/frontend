import { Text } from "@/components/typography/Text";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
    component: Text,
    argTypes: {
        size: {
            options: ["2xl", "xl", "l", "m", "s", "xs", "2xs"],
            control: { type: "radio" },
        },
        color: {
            control: { type: "color" },
        },
        weight: {
            options: [400, 500, 600, 700, 800, 900],
            control: { type: "radio" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        size: "m",
        weight: "normal",
    },
    render: (args) => {
        return (
            <Text size={args.size} weight={args.weight}>
                <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                <br />
                <span>가나다라마바사아자차카파타하</span>
            </Text>
        );
    },
};
