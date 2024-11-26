import { http, HttpResponse } from "msw";

import mockImg from "@/__mocks__/sample-codi.jpg";

export const productMockHandlers = [
    http.get("/recommend/mycloth/:id", () => {
        return HttpResponse.json(PRODUCT_MOCKING_DATA, { status: 200 });
    }),
];

export const PRODUCT_MOCKING_DATA = [];