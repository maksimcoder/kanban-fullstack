import { chakra, Flex } from '@chakra-ui/react';

export const ColumnContainer = chakra(Flex, {
	base: {
		flexDirection: 'column',
		gap: '24px',

		height: '100%',
	},
});

export const TasksContainer = chakra(Flex, {
	base: {
		flexDirection: 'column',
		gap: '20px',

		height: '100%',
	},
});
