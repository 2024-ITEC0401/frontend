import casual from "@/__mocks__/casual.png";
import minimal from "@/__mocks__/minimal.png";
import street from "@/__mocks__/street.png";

export const styleList = [
    { id: 1, koreanCategory: "캐주얼", englishCategory: "Casual", imgSrc: casual },
    { id: 2, koreanCategory: "미니멀", englishCategory: "Minimal", imgSrc: minimal },
    { id: 3, koreanCategory: "스트릿", englishCategory: "Street", imgSrc: street },
] as const;

export type StyleOption = (typeof styleList)[number];
