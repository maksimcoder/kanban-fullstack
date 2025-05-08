'use client';

import { ChakraProvider } from '@chakra-ui/react';

import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import themingSystem from './config';

export function Provider(props: ColorModeProviderProps) {
	return (
		<ChakraProvider value={themingSystem}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
