import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { ContextMenuIcon } from 'src/assets/icons';
import { Button } from 'src/shared/components';

import { Sidebar } from '../Sidebar';
import { ContentContainer, NavbarContainer } from './styles';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HStack
			className='main-layout'
			alignItems='flex-start'
			gap={0}
			as={'main'}
			height='100%'
		>
			<Sidebar />
			<ContentContainer padding={0} fluid>
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
