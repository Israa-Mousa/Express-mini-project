import type { Response } from 'express';
import { ModuleNameType } from './constant';
import { ErrorStatusCode } from './util.types';
export declare class CustomError extends Error {
    moduleName: ModuleNameType;
    statusCode: ErrorStatusCode;
    errorType: string;
    constructor(msg: string, moduleName: ModuleNameType, statusCode: ErrorStatusCode);
}
export declare const handleError: (error: unknown, res: Response) => void;
//# sourceMappingURL=exception.d.ts.map