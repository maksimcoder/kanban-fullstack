export interface IErrorResponse {
	status: string | number;
	message: string;
}

export interface IResponseDTO<T> {
	data: T;
}
