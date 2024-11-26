import { http, HttpResponse } from "msw";

import casual from "@/__mocks__/casual.png";
import minimal from "@/__mocks__/minimal.png";
import street from "@/__mocks__/street.png";

export const codiMockHandlers = [
    http.get("/recommend/mycloth", () => {
        return HttpResponse.json(CODI_MOCKING_DATA, { status: 200 });
    }),
];

export const CODI_MOCKING_DATA = [
    {
        clothId: 1,
        imgSrc: casual,
        title: "캐주얼 룩",
        createdAt: "2024. 09. 24",
        description: "캐주얼한 룩으로 편하게 입을 수 있는 코디입니다.",
        hashtags: ["#캐주얼", "#편안한", "#포인트"],
    },
    {
        clothId: 2,
        imgSrc: minimal,
        title: "미니멀 룩",
        createdAt: "2024. 09. 24",
        description: "미니멀한 룩으로 깔끔하게 입을 수 있는 코디입니다.",
        hashtags: ["#미니멀", "#깔끔한", "#포인트"],
    },
    {
        clothId: 3,
        imgSrc: street,
        title: "스트릿 룩",
        createdAt: "2024. 09. 24",
        description: "스트릿 룩으로 세련되게 입을 수 있는 코디입니다.",
        hashtags: ["#스트릿", "#세련된", "#포인트"],
    },
];
