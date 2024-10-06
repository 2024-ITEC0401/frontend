import { ColorPalette } from "./ColorPalette";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorPalette> = {
    title: "Forms/ColorPalette/ColorPalette",
    component: ColorPalette,
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
    args: {
        width: "550px",
        height: "230px",
    },
    render: (args) => {
        return (
            <ColorPalette
                width={args.width}
                height={args.height}
                onChange={(selectedColor) => console.log(selectedColor)}
                colors={[
                    {
                        colorLabel: "빨간색",
                        colorValue: "COLOR_RED",
                        color: "red",
                    },
                    {
                        colorLabel: "주황색",
                        colorValue: "COLOR_ORANGE",
                        color: "orange",
                    },
                    {
                        colorLabel: "노란색",
                        colorValue: "COLOR_YELLOW",
                        color: "yellow",
                    },
                    {
                        colorLabel: "초록색",
                        colorValue: "COLOR_GREEN",
                        color: "green",
                    },
                    {
                        colorLabel: "파란색",
                        colorValue: "COLOR_BLUE",
                        color: "blue",
                    },
                ]}
            />
        );
    },
};
