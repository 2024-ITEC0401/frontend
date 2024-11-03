import { PopOver, PopOverItem } from "@/components/overlay/PopOver";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PopOver> = {
    component: PopOver,
};

export default meta;
type Story = StoryObj<typeof PopOver>;

export const Default: Story = {
    args: {
        width: "140px",
    },
    render: (args) => {
        return (
            <PopOver {...args}>
                <PopOverItem>옷장 정보 수정하기</PopOverItem>
                <PopOverItem>어울리는 코디 찾기</PopOverItem>
            </PopOver>
        );
    },
};
