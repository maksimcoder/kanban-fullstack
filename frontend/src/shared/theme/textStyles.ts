import { defineTextStyles } from '@chakra-ui/react';

const fontFamily = 'Plus Jakarta Sans Variable, sans-serif';

export const textStyles = defineTextStyles({
	headingXL: {
		value: {
			fontFamily,
			fontSize: '24px',
			fontWeight: '700',
			lineHeight: '30px',
			letterSpacing: 'normal',
		},
	},
	headingL: {
		value: {
			fontFamily,
			fontSize: '18px',
			fontWeight: '700',
			lineHeight: '23px',
			letterSpacing: 'normal',
		},
	},
	headingM: {
		value: {
			fontFamily,
			fontSize: '15px',
			fontWeight: '700',
			lineHeight: '19px',
			letterSpacing: 'normal',
		},
	},
	headingS: {
		value: {
			fontFamily,
			fontSize: '12px',
			fontWeight: '700',
			lineHeight: '15px',
			letterSpacing: '2.4px',
		},
	},
	textM: {
		value: {
			fontFamily,
			fontSize: '13px',
			fontWeight: '500',
			lineHeight: '23px',
			letterSpacing: 'normal',
		},
	},
	textBold: {
		value: {
			fontFamily,
			fontSize: '12px',
			fontWeight: '700',
			lineHeight: '15px',
			letterSpacing: 'normal',
		},
	},
});
