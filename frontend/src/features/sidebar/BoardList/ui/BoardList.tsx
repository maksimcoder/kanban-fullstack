import { FC } from 'react';
import { BoardListItem } from 'src/shared/components';

import { BoardListContainer } from './styles';

interface IBoard {
	id: string;
	title: string;
}

const mockBoards: IBoard[] = [
	{
		id: '1',
		title: 'Московский банк',
	},
	{
		id: '2',
		title: 'Сбербанк',
	},
	{
		id: '3',
		title: 'Райффайзен банк',
	},
];

export const BoardList: FC = () => {
	const boardElements = mockBoards.map(({ id, title }) => {
		return <BoardListItem isActive={id === '1'} title={title} key={id} />;
	});

	return (
		<BoardListContainer className='board-list'>
			{boardElements}
			<BoardListItem isAddBtn title='+ Create New Board' />
		</BoardListContainer>
	);
};
