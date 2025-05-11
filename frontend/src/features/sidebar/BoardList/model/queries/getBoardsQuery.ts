import { queryOptions } from '@tanstack/react-query';
import {
	API_BASE,
	BoardQueryKeys,
	Endpoints,
	IBoard,
	IResponseDTO,
} from 'src/shared/api';

async function getBoards(): Promise<IResponseDTO<IBoard[]>> {
	const response = await fetch(`${API_BASE}/${Endpoints.BOARD}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Error with fetching boards');
	}

	return response.json();
	// try {
	// 	const response = await fetch(`${API_BASE}/${Endpoints.BOARD}`, {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 	});

	// 	if (!response.ok) {
	// 		throw {
	// 			status: response.status,
	// 			message: 'Error with fetching boards',
	// 		};
	// 	}

	// 	return response.json();
	// } catch (error: unknown) {
	// 	console.error(error);
	// 	return error as IErrorResponse;
	// }
}

export const getBoardsQueryOptions = () =>
	queryOptions({
		queryKey: [BoardQueryKeys.BOARDS],
		queryFn: getBoards,
	});
