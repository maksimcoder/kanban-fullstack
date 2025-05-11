import { FC } from 'react';
import { BoardIcon } from 'src/assets/icons';

import { BoardListItemContainer, BoardListItemText } from './styles';

interface IDeskListItemProps {
	title: string;
	isActive?: boolean;
	isAddBtn?: boolean;
	onClick: () => void;
}

export const BoardListItem: FC<IDeskListItemProps> = ({
	title,
	isActive,
	isAddBtn,
	onClick,
}) => {
	const iconColor = isAddBtn ? '#635FC7' : undefined;
	function defineTextVariant() {
		if (isAddBtn) return 'add';
		if (isActive) return 'active';

		return 'default';
	}

	return (
		<BoardListItemContainer
			variant={isActive ? 'active' : 'default'}
			className='board-list-item'
			onClick={onClick}
		>
			<BoardIcon fill={iconColor} />
			<BoardListItemText
				variant={defineTextVariant()}
				textStyle='headingM'
			>
				{title}
			</BoardListItemText>
		</BoardListItemContainer>
	);
};
