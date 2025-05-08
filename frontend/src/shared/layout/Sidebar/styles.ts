import { chakra, Flex, Heading as UIHeading } from '@chakra-ui/react';

export const SidebarContainer = chakra(Flex, {
	base: {
		flexDirection: 'column',
		justifyContent: 'space-between',

		minWidth: '300px',
		height: '100vh',

		borderRight: '1px solid #E4EBFA',
		backgroundColor: 'white',

		_dark: {
			backgroundColor: 'colors.darkGrey',
			borderRight: '1px solid #3E3F4E',
		},
	},
});

export const LogoContainer = chakra(Flex, {
	base: {
		paddingTop: '33px',
		paddingLeft: '34px',
		paddingBottom: '54px',
	},
});

export const Heading = chakra(UIHeading, {
	base: {
		paddingLeft: '32px',
		paddingBottom: '20px',
		color: 'colors.mediumGrey',
		textTransform: 'uppercase',
	},
});

export const ThemeSwitcherContainer = chakra(Flex, {
	base: {
		gap: '20px',
		justifyContent: 'center',
		alignItems: 'center',

		marginBottom: '20px',
		marginInline: '25px',
		paddingBlock: '14px',

		backgroundColor: 'colors.lightGrey',
		borderRadius: '5px',

		_dark: {
			backgroundColor: 'colors.veryDarkGrey',
		},
	},
});
