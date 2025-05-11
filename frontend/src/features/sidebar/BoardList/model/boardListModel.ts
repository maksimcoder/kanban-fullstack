import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from '@tanstack/react-router';
import { useEffect } from 'react';

import { getBoardsQueryOptions } from './queries';

export const useBoardListModel = () => {
	const { boardId: currentBoardId } = useParams({ strict: false });
	const navigate = useNavigate({ from: '/' });
	const { data: boards, isFetching } = useQuery(getBoardsQueryOptions());

	function getFirstBoardIdForRedirect() {
		if (boards?.data.length) {
			return String(boards.data[0].id);
		}

		return '';
	}

	function handleBoardRedirect(boardId: string) {
		navigate({
			to: '/board/$boardId',
			params: { boardId },
		});
	}

	function handleBoardCreate() {
		console.log('create board');
	}

	useEffect(() => {
		if (currentBoardId) {
			handleBoardRedirect(currentBoardId);
			return;
		}

		handleBoardRedirect(getFirstBoardIdForRedirect());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [boards, currentBoardId]);

	return {
		boards: boards?.data,
		isFetching,
		handleBoardCreate,
		handleBoardRedirect,
		currentBoardId,
	};
};
