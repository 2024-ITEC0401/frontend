import { RecommendedCodiCard } from "@/entities/clothes/ui/RecommendedCodiCard";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecommendedCodiCard> = {
    title: "RecommendedCodiCard",
    component: RecommendedCodiCard,
};

export default meta;
type Story = StoryObj<typeof RecommendedCodiCard>;

export const Default: Story = {
    args: {
        imgSrc: ["https://via.placeholder.com/240"],
        title: "코디 제목",
        createdAt: "2021-10-10",
        hashTags: [
            "해시태그1",
            "해시태그2",
            "해시태그3",
            "해시태그4",
            "해시태그1",
            "해시태그2",
            "해시태그3",
            "해시태그4",
        ],
        description:
            "무더운 여름 에도 깔끔하고 시원하게 입을 수 있는 코디 입니다. 시원한 린넨 바지와 상의와 신발의 포인트 색상을 맞춘 코디 입니다. 무더운 여름 에도 깔끔하고 시원하게 입을 수 있는 코디 입니다. 시원한 린넨 바지와 상의와 신발의 포인트 색상을 맞춘 코디 입니다",
    },
};
