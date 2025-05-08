import { Heading, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { Button } from 'src/shared/components';

export const EmptyBoardPlaceholder: FC = () => {
	return (
		<VStack gap='32px' justifyContent='center' height='100%'>
			<Heading color='colors.mediumGrey' textStyle='headingL'>
				Создайте новый столбец, чтобы начать
			</Heading>
			<Button variant='primary' size='lg'>
				+ Добавить Столбец
			</Button>
		</VStack>
	);
};
