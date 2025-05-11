import { FC } from 'react';
import { BoardListItem } from 'src/shared/components';

import { useBoardListModel } from '../model';
import { BoardListContainer } from './styles';

export const BoardList: FC = () => {
	const {
		boards,
		isFetching,
		currentBoardId,
		handleBoardCreate,
		handleBoardRedirect,
	} = useBoardListModel();

	if (isFetching) return 'Fetching boards...';

	const boardElements = boards?.map(({ id, name }) => {
		return (
			<BoardListItem
				onClick={() => handleBoardRedirect(String(id))}
				isActive={id === Number(currentBoardId)}
				title={name}
				key={id}
			/>
		);
	});
	return (
		<BoardListContainer className='board-list'>
			{boardElements}
			<BoardListItem
				isAddBtn
				title='+ Create New Board'
				onClick={handleBoardCreate}
			/>
		</BoardListContainer>
	);
};
