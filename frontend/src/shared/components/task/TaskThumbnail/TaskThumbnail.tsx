import { Text } from '@chakra-ui/react';
import { FC } from 'react';

import { TaskThumbnailContainer, TaskThumbnailTitle } from './styles';

interface ITaskThumbnailProps {
	title: string;
	subtaskCount?: number;
	doneSubtaskCount?: number;
}

export const TaskThumbnail: FC<ITaskThumbnailProps> = ({
	title,
	subtaskCount,
	doneSubtaskCount,
}) => {
	const doneTasksCount = doneSubtaskCount ? doneSubtaskCount : 0;
	return (
		<TaskThumbnailContainer>
			<TaskThumbnailTitle textStyle='headingM'>
				{title}
			</TaskThumbnailTitle>
			{subtaskCount && (
				<Text textStyle='textM'>
					{doneTasksCount} из {subtaskCount} подзадач
				</Text>
			)}
		</TaskThumbnailContainer>
	);
};
