import { http, HttpResponse } from "msw";

import BlackShirt from "@/__mocks__/BlackShirt.png";
import Coduroi from "@/__mocks__/Coduroi.png";
import Denim from "@/__mocks__/Denim.png";
import Hoodie from "@/__mocks__/Hoodie.png";
import Shirt from "@/__mocks__/Shirt.png";
import Slacks from "@/__mocks__/Slacks.png";

export const productMockHandlers = [
    // 전체 추천 상품 목록 반환
    http.get("/recommend/mycloth/:clothId", () => {
        return HttpResponse.json(PRODUCT_MOCKING_DATA, { status: 200 });
    }),
];

export const PRODUCT_MOCKING_DATA = [
    {
        clothId: 1,
        imgSrc: Shirt,
        title: "화이트 셔츠",
        count: 3,
        category: "상의",
    },
    {
        clothId: 2,
        imgSrc: BlackShirt,
        title: "블랙 셔츠",
        count: 2,
        category: "상의",
    },
    {
        clothId: 3,
        imgSrc: Hoodie,
        title: "후드티",
        count: 6,
        category: "상의",
    },
    {
        clothId: 4,
        imgSrc: Coduroi,
        title: "코듀로이 팬츠",
        count: 3,
        category: "하의",
    },
    {
        clothId: 5,
        imgSrc: Denim,
        title: "데님 팬츠",
        count: 4,
        category: "하의",
    },
    {
        clothId: 6,
        imgSrc: Slacks,
        title: "슬랙스",
        count: 2,
        category: "하의",
    },
];
