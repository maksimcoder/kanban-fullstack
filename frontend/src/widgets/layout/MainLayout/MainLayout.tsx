import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { ContextMenuIcon } from 'src/assets/icons';
import { Button } from 'src/shared/components';

import { ContentContainer, NavbarContainer } from './styles';

interface IMainLayoutProps extends PropsWithChildren {
	sidebarSlot?: ReactNode;
	navbarSlot?: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({
	sidebarSlot,
	navbarSlot,
	children,
}) => {
	return (
		<HStack
			className='main-layout'
			alignItems='flex-start'
			gap={0}
			as={'main'}
			height='100%'
		>
			{sidebarSlot}
			<ContentContainer padding={0} fluid>
				{navbarSlot}
				<NavbarContainer className='navbar'>
					<Heading textStyle='headingXL'>Московский банк</Heading>
					<Flex alignItems='center' gap='24px'>
						<Button variant='primary' size='lg'>
							+ Добавить задачу
						</Button>
						<Flex
							width='10px'
							justifyContent='center'
							cursor='pointer'
						>
							<ContextMenuIcon />
						</Flex>
					</Flex>
				</NavbarContainer>
				<Box height='100%' className='content'>
					{children}
				</Box>
			</ContentContainer>
		</HStack>
	);
};
