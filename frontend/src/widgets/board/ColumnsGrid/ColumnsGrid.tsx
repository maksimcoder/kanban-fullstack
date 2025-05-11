import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { BoardColumn } from 'src/shared/components';

export const ColumnsGrid: FC = () => {
	return (
		<Grid autoColumns='280px' autoFlow='column' columnGap={'24px'}>
			<GridItem>
				<BoardColumn />
			</GridItem>
			<GridItem>
				<BoardColumn />
			</GridItem>
		</Grid>
	);
};
