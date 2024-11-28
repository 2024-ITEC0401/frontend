export type RecommendationFilterType = {
    label: string;
    key: string;
    tags?: {
        label: string;
        value: string;
    }[];
};

export const recommendationFilter: RecommendationFilterType[] = [
    {
        label: "날씨별",
        key: "weather",
        tags: [
            {
                label: "맑음",
                value: "clear",
            },
            {
                label: "흐림",
                value: "cloudy",
            },
            {
                label: "비",
                value: "rain",
            },
            {
                label: "눈",
                value: "snow",
            },
        ],
    },
    {
        label: "상황별",
        key: "situation",
        tags: [
            {
                label: "집에서",
                value: "home",
            },
            {
                label: "외출",
                value: "out",
            },
            {
                label: "운동",
                value: "exercise",
            },
            {
                label: "공부",
                value: "study",
            },
        ],
    },
];
