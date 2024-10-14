import { RecommendedCodiCard } from "@/components/display/RecommendedCodiCard";

import sampleCodiImg from "@/__mocks__/sample-codi.jpg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecommendedCodiCard> = {
    title: "display/RecommendedCodiCard",
    component: RecommendedCodiCard,
};

export default meta;
type Story = StoryObj<typeof RecommendedCodiCard>;

export const Default: Story = {
    args: {
        width: "820px",
        height: "180px",
        imgSrc: sampleCodiImg,
        title: "여름 깔끔한 실루엣",
        createdAt: "2021.07.01",
        description:
            "여름에 입기 좋은 깔끔한 실루엣의 코디입니다. 여름에 입기 좋은 깔끔한 실루엣의 코디입니다. 여름에 입기 좋은 깔끔한 실루엣의 코디입니다. 여름에 입기 좋은 깔끔한 실루엣의 코디입니다.",
        hashtags: ["#여름", "#깔끔", "#실루엣"],
    },
};
