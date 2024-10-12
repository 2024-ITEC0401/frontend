import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Forms/Button",
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: "primary",

        width: "330px",
        height: "60px",

        children: "저장하기",
    },

    render: (args) => {
        return <Button {...args}>{args.children}</Button>;
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",

        width: "330px",
        height: "60px",

        children: "삭제하기",
    },

    render: (args) => {
        return <Button {...args}>{args.children}</Button>;
    },
};

export const Login: Story = {
    args: {
        variant: "login",

        width: "580px",
        height: "60px",

        children: "구글 계정으로 시작하기",
    },

    render: (args) => {
        return <Button {...args}>{args.children}</Button>;
    },
};
