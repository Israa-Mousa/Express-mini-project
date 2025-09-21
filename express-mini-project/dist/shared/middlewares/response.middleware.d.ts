import { RequestHandler } from 'express';
import { ErrorStatusCode } from '../utils/util.types';
export type UnifiedApiErrorResponse = {
    statusCode: ErrorStatusCode;
    message: string;
};
export type SuccessApiResponse = {
    success: true;
    data: object;
};
export type UnsuccessfulApiResponse = {
    success: false;
    error: UnifiedApiErrorResponse;
};
export type UnifiedApiResponse = SuccessApiResponse | UnsuccessfulApiResponse;
export declare const responseEnhancer: RequestHandler;
//# sourceMappingURL=response.middleware.d.ts.map