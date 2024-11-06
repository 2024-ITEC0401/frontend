export const colorList = [
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
    {
        colorLabel: "남색",
        colorValue: "COLOR_NAVY",
        color: "navy",
    },
    {
        colorLabel: "보라색",
        colorValue: "COLOR_PURPLE",
        color: "purple",
    },
];

export type ColorOption = (typeof colorList)[number];
