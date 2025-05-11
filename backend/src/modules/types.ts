interface INormalizedResponse<T> {
    data: T;
}

interface IErrorResponse {
    status: number;
    message: string;
}

export type IEndpointResponse<T> = INormalizedResponse<T> | IErrorResponse;