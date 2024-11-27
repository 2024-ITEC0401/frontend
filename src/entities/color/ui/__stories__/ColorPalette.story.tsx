import { useEffect, useState } from "react";

import { ColorPalette, SelectedColor } from "@/entities/color/ui/ColorPalette";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorPalette> = {
    title: "ColorPalette",
    component: ColorPalette,
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Default: Story = {
    args: {
        width: "550px",
    },
    render: (args) => {
        const [color, setColor] = useState<SelectedColor | undefined>(undefined);

        useEffect(() => {
            console.log(color);
        }, [color]);

        return (
            <ColorPalette
                width={args.width}
                onChange={(selectedColor) => setColor(selectedColor)}
                defaultSelectedColor={color}
                colors={[
                    {
                        colorLabel: "빨간색",
                        colorValue: "COLOR_RED",
                        color: "#ff0000",
                    },
                    {
                        colorLabel: "주황색",
                        colorValue: "COLOR_ORANGE",
                        color: "#ffa500",
                    },
                    {
                        colorLabel: "노란색",
                        colorValue: "COLOR_YELLOW",
                        color: "#ffff00",
                    },
                    {
                        colorLabel: "초록색",
                        colorValue: "COLOR_GREEN",
                        color: "#008000",
                    },
                    {
                        colorLabel: "파란색",
                        colorValue: "COLOR_BLUE",
                        color: "#0000ff",
                    },
                ]}
            />
        );
    },
};
