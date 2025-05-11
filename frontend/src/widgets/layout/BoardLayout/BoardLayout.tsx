import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export const BoardLayout: FC<PropsWithChildren> = ({ children }) => {
	return <Box padding='24px'>{children}</Box>;
};
