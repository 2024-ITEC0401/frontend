import { setupWorker } from 'msw/browser';
import { clothesMockHandlers } from '@/pages/myCloset/api/clothes.mock';
import { codiMockHandlers } from '@/pages/RecommendCodiPage/api/codi.mock';

export const worker = setupWorker(...clothesMockHandlers, ...codiMockHandlers);
