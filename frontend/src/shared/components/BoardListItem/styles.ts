import { chakra, Flex, Heading } from '@chakra-ui/react';

export const BoardListItemContainer = chakra(Flex, {
	base: {
		gap: '16px',
		alignItems: 'center',

		maxWidth: '276px',

		paddingBlock: '14px',
		paddingLeft: '32px',
	},
	variants: {
		variant: {
			default: {
				backgroundColor: 'transparent',
				cursor: 'pointer',
			},
			active: {
				backgroundColor: 'colors.mainPurple',
				borderRadius: '0 100px 100px 0',
				cursor: 'default',
			},
		},
	},
});

export const BoardListItemText = chakra(Heading, {
	base: {
		color: 'colors.mediumGrey',
	},
	variants: {
		variant: {
			default: {
				color: 'colors.mediumGrey',
			},
			active: {
				color: 'colors.white',
			},
			add: {
				color: 'colors.mainPurple',
			},
		},
	},
});
