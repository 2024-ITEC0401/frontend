import { http, HttpResponse } from "msw";

import mockImg from "@/__mocks__/sample-codi.jpg";

export const clothesMockHandlers = [
    http.get("/closet", () => {
        return HttpResponse.json(CLOTHES_MOCKING_DATA, { status: 200 });
    }),
];

interface Cloth {
    id: number;
    brandName: string;
    imgSrc: string;
    category: string;
    subCategory: string;
    color: string;
    size: string;
}

export const CLOTHES_MOCKING_DATA: Cloth[] = [
    {
        id: 1,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "화이트",
        size: "M",
    },
    {
        id: 2,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "블랙",
        size: "M",
    },
    {
        id: 3,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "그레이",
        size: "M",
    },
    {
        id: 4,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "옐로우",
        size: "M",
    },
    {
        id: 5,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "화이트",
        size: "M",
    },
    {
        id: 6,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "화이트",
        size: "M",
    },
    {
        id: 7,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "화이트",
        size: "M",
    },
    {
        id: 8,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "니트 / 스웨터",
        subCategory: "상세 카테고리",
        color: "화이트",
        size: "M",
    },
    {
        id: 9,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "셔츠 / 블라우스",
        subCategory: "상세 카테고리",
        color: "화이트",
        size: "S",
    },
    {
        id: 10,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "맨투맨 / 후드티",
        subCategory: "상세 카테고리",
        color: "그레이",
        size: "M",
    },
    {
        id: 11,
        brandName: "브랜드 이름",
        imgSrc: mockImg,
        category: "정장 / 세미 정장",
        subCategory: "상세 카테고리",
        color: "화이트",
        size: "M",
    },
];
