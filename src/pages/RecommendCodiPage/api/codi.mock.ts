import { http, HttpResponse } from "msw";

import mockImg from "@/__mocks__/sample-codi.jpg";

export const codiMockHandlers = [
    http.get("/recommend/mycloth", () => {
        return HttpResponse.json(CODI_MOCKING_DATA, { status: 200 });
    }),
];

export const CODI_MOCKING_DATA = [];
