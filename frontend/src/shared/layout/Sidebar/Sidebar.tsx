import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import {
	DarkThemeIcon,
	LightThemeIcon,
	LogoDark,
	LogoLight,
} from 'src/assets/icons';
import { BoardList } from 'src/features/sidebar';
import { Switch } from 'src/shared/components';
import { useColorMode } from 'src/shared/theme';

import {
	Heading,
	LogoContainer,
	SidebarContainer,
	ThemeSwitcherContainer,
} from './styles';

export const Sidebar: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const logoElement = colorMode === 'dark' ? <LogoLight /> : <LogoDark />;
	return (
		<SidebarContainer className='sidebar'>
			<Box>
				<LogoContainer className='sidebar__logo'>
					{logoElement}
				</LogoContainer>
				<Box className='sidebar__desks-menu-container'>
					<Heading
						className='menu-container__heading'
						textStyle='headingS'
					>
						Все доски (3)
					</Heading>
					<Box className='menu-container__menu'>
						<BoardList />
					</Box>
				</Box>
			</Box>
			<ThemeSwitcherContainer>
				<LightThemeIcon />
				<Switch
					checked={colorMode === 'dark'}
					onCheckedChange={toggleColorMode}
				/>
				<DarkThemeIcon />
			</ThemeSwitcherContainer>
		</SidebarContainer>
	);
};
