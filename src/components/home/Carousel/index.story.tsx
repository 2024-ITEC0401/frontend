import { Carousel } from "@/components/home/Carousel";

import cloudImg from "@/assets/home/cloud.png";
import rainImg from "@/assets/home/rain.png";
import snowImg from "@/assets/home/snow.png";
import sumImg from "@/assets/home/sun.png";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Carousel> = {
    component: Carousel,
    title: "display/Carousel",
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
    args: {
        carouselImgs: [sumImg, rainImg, cloudImg, snowImg],
    },
};
