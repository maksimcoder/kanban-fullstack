import { chakra, Flex, Heading } from '@chakra-ui/react';

export const TaskThumbnailContainer = chakra(Flex, {
	base: {
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '8px',

		width: '100%',
		maxWidth: '280px',
		maxHeight: '88px',

		paddingBlock: '23px',
		paddingLeft: '16px',

		backgroundColor: 'colors.white',
		borderRadius: '8px',
		boxShadow: `0px 4px 6px 0px rgba(54, 78, 126, 0.10)`,
		cursor: 'pointer',

		_dark: {
			backgroundColor: 'colors.darkGrey',
		},
	},
});

export const TaskThumbnailTitle = chakra(Heading, {
	base: {
		color: 'colors.black',

		_dark: {
			color: 'colors.white',
		},
	},
});
