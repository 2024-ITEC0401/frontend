import { codiMockHandlers } from "@/pages/RecommendCodiPage/api/codi.mock";
import { productMockHandlers } from "@/pages/RecommendProductPage/api/product.mock";
import { clothesMockHandlers } from "@/pages/myCloset/api/clothes.mock";

import { setupWorker } from "msw/browser";

export const worker = setupWorker(...clothesMockHandlers, ...codiMockHandlers, ...productMockHandlers);
