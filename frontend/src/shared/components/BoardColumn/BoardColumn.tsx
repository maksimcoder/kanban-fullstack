import { ColorSwatch, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import { TaskThumbnail } from '../task';
import { ColumnContainer, TasksContainer } from './styles';

const mockTasks = [
	{
		title: 'Сделать дело',
		subtaskCount: 3,
		doneSubtaskCount: 4,
	},
	{
		title: 'Гулять смело',
		subtaskCount: 16,
	},
];

export const BoardColumn: FC = () => {
	const taskCardElements = mockTasks.map((item) => {
		return <TaskThumbnail {...item} />;
	});
	return (
		<ColumnContainer className='board-column'>
			<Flex className='column-header' gap='12px' alignItems='center'>
				<ColorSwatch borderRadius='100%' value='#49C4E5' size='2xs' />
				<Heading
					color='colors.mediumGrey'
					textTransform='uppercase'
					textStyle='headingS'
					className='column-title'
				>
					todo (4)
				</Heading>
			</Flex>
			<TasksContainer className='column-tasks'>
				{taskCardElements}
			</TasksContainer>
		</ColumnContainer>
	);
};
