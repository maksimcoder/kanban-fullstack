import { defineTokens } from '@chakra-ui/react';

export const fontFamilyTokens = defineTokens({
	fonts: {
		headingXL: { value: 'Plus Jakarta Sans Variable, sans-serif' },
		headingL: { value: 'Plus Jakarta Sans Variable, sans-serif' },
		headingM: { value: 'Plus Jakarta Sans Variable, sans-serif' },
		headingS: { value: 'Plus Jakarta Sans Variable, sans-serif' },
		textM: { value: 'Plus Jakarta Sans Variable, sans-serif' },
		textBold: { value: 'Plus Jakarta Sans Variable, sans-serif' },
	},
});

export const fontSizeTokens = defineTokens({
	fontSizes: {
		headingXL: { value: '24px' },
		headingL: { value: '18px' },
		headingM: { value: '15px' },
		headingS: { value: '12px' },
		textM: { value: '13px' },
		textBold: { value: '12px' },
	},
});

export const fontWeightTokens = defineTokens({
	fontWeights: {
		bold: {
			value: '700',
		},
		medium: {
			value: '500',
		},
	},
});

export const fontLineHeightTokens = defineTokens({
	lineHeights: {
		headingXL: { value: '30px' },
		headingL: { value: '23px' },
		headingM: { value: '19px' },
		headingS: { value: '15px' },
		textM: { value: '23px' },
		textBold: { value: '15px' },
	},
});

export const fontLetterSpacingTokens = defineTokens({
	letterSpacings: {
		headingXL: { value: 'normal' },
		headingL: { value: 'normal' },
		headingM: { value: 'normal' },
		headingS: { value: '2.4px' },
		textM: { value: 'normal' },
		textBold: { value: 'normal' },
	},
});
