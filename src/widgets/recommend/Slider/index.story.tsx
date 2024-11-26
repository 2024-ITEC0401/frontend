import { Slider } from "./index";
import sampleCodiImg from "@/__mocks__/sample-codi.jpg";
import { ClothItem } from "@/entities/clothes/ui/ClothItem";
import { CodiCardWithHashTags } from "@/entities/clothes/ui/CodiCardWithHashTags";
import { RecommendedProductCard } from "@/entities/clothes/ui/RecommendedProductCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Slider> = {
    component: Slider,
    title: "display/Slider",
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
    args: {
        sliderItems: [
            { title: "흰색 롱 슬리브", count: 3 },
            { title: "청바지", count: 2 },
            { title: "레더자켓", count: 4 },
            { title: "카고 팬츠", count: 3 },
            { title: "회색 코트", count: 2 },
            { title: "흰색 롱 슬리브", count: 3 },
            { title: "청바지", count: 2 },
            { title: "레더자켓", count: 4 },
            { title: "카고 팬츠", count: 3 },
            { title: "회색 코트", count: 2 },
        ],

        Component: RecommendedProductCard,
        slidersPerView: 5,
    },
    argTypes: {
        variant: {
            control: {
                type: "inline-radio",
                options: ["primary", "secondary"],
            },
        },
    },
};

export const Secondary: Story = {
    args: {
        sliderItems: [
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
            { title: "여름 깔끔한 실루엣", hashTags: ["#여름", "#깔끔한", "#시원한"] },
        ],
        Component: CodiCardWithHashTags,
        slidersPerView: 5,
    },
    argTypes: {
        variant: {
            control: {
                type: "inline-radio",
                options: ["primary", "secondary"],
            },
        },
    },
};

export const Tertiary: Story = {
    args: {
        sliderItems: [
            { imgSrc: sampleCodiImg, title: "흰색 롱 슬리브" },
            { imgSrc: sampleCodiImg, title: "청바지" },
            { imgSrc: sampleCodiImg, title: "레더자켓" },
            { imgSrc: sampleCodiImg, title: "카고 팬츠" },
            { imgSrc: sampleCodiImg, title: "회색 코트" },
            { imgSrc: sampleCodiImg, title: "흰색 롱 슬리브" },
            { imgSrc: sampleCodiImg, title: "청바지" },
            { imgSrc: sampleCodiImg, title: "레더자켓" },
            { imgSrc: sampleCodiImg, title: "카고 팬츠" },
            { imgSrc: sampleCodiImg, title: "회색 코트" },
        ],
        Component: ClothItem,
        slidersPerView: 5,
    },
    argTypes: {
        variant: {
            control: {
                type: "inline-radio",
                options: ["primary", "secondary"],
            },
        },
    },
};
