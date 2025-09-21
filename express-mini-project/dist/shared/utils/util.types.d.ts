export type StringObject = Record<string, unknown>;
export declare const HttpErrorStatus: {
    readonly BadRequest: 400;
    readonly Unauthorized: 401;
    readonly PaymentRequired: 402;
    readonly Forbidden: 403;
    readonly NotFound: 404;
    readonly MethodNotAllowed: 405;
    readonly Conflict: 409;
    readonly Gone: 410;
    readonly UnprocessableEntity: 422;
    readonly TooManyRequests: 429;
    readonly InternalServerError: 500;
    readonly NotImplemented: 501;
    readonly BadGateway: 502;
    readonly ServiceUnavailable: 503;
    readonly GatewayTimeout: 504;
};
export type HttpErrorStatusType = typeof HttpErrorStatus;
export type ErrorStatusCode = HttpErrorStatusType[keyof HttpErrorStatusType];
export type ApiStatusCode = ErrorStatusCode | 200 | 201 | 202 | 204;
//# sourceMappingURL=util.types.d.ts.map