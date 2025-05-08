/* eslint-disable prettier/prettier */
import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
	base: {
		color: 'colors.white',
		fontFamily: 'fonts.headingM',
        fontWeight: 'fontWeights.bold',

        _hover: {
            cursor: 'pointer',
        },
		transition: 'background-color 0.2s ease',
	},
	variants: {
		variant: {
			primary: {
				backgroundColor: 'colors.mainPurple',
                
                _hover: {
                    backgroundColor: 'colors.mainPurpleHover',
                },
			},
            secondary: {
				color: 'colors.mainPurple',
                backgroundColor: 'colors.secondaryPurple',

				_hover: {
                    backgroundColor: 'colors.secondaryPurpleHover',
                },

				_dark: {
					backgroundColor: 'colors.white',

					_hover: {
						backgroundColor: 'colors.whiteHover',
					}
				}
            },
			destructive: {
				backgroundColor: 'colors.red',

				_hover: {
                    backgroundColor: 'colors.redHover',
                },
			}
		},
		size: {
			lg: { padding: '15px 25px', fontSize: 'fontSizes.headingM', borderRadius: '24px', },
			sm: { padding: '8px 16px', fontSize: 'fontSizes.textM', lineHeight: 'lineHeights.textM', borderRadius: '20px', },
		},
	},
});
