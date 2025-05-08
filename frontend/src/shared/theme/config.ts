import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import {
	fontFamilyTokens,
	fontLetterSpacingTokens,
	fontLineHeightTokens,
	fontSizeTokens,
	fontWeightTokens,
} from './fonts';
import { textStyles } from './textStyles';
import { colorTokens } from './tokens';

const customConfig = defineConfig({
	theme: {
		tokens: {
			colors: colorTokens,
			fonts: fontFamilyTokens,
			fontSizes: fontSizeTokens,
			fontWeights: fontWeightTokens,
			lineHeights: fontLineHeightTokens,
			letterSpacings: fontLetterSpacingTokens,
		},
		textStyles,
	},
});

const themingSystem = createSystem(defaultConfig, customConfig);

export default themingSystem;
