import { chakra, Container, Flex } from '@chakra-ui/react';

export const ContentContainer = chakra(Container, {
	base: {
		display: 'flex',
		flexDirection: 'column',

		height: '100%',

		padding: 0,
	},
});

export const NavbarContainer = chakra(Flex, {
	base: {
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '20px 24px',

		backgroundColor: 'colors.white',
		borderBottom: '1px solid #E4EBFA',

		_dark: {
			backgroundColor: 'colors.darkGrey',
			borderBottom: '1px solid #3E3F4E',
		},
	},
});
