import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { createFileRoute } from '@tanstack/react-router';
import { BoardColumn } from 'src/shared/components/BoardColumn';
import { EmptyBoardPlaceholder } from 'src/widgets/board';

export const Route = createFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	const isColumnsAvailable = true;

	if (!isColumnsAvailable) return <EmptyBoardPlaceholder />;

	return (
		<Box padding='24px'>
			<Grid autoColumns='280px' autoFlow='column' columnGap={'24px'}>
				<GridItem>
					<BoardColumn />
				</GridItem>
				<GridItem>
					<BoardColumn />
				</GridItem>
			</Grid>
		</Box>
	);
}
