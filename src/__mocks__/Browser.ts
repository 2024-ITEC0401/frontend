import { setupWorker } from 'msw/browser';
import { clothesMockHandlers } from '@/pages/myCloset/api/clothes.mock';

export const worker = setupWorker(...clothesMockHandlers);
