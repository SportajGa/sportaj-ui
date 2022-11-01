import { create } from '@storybook/theming';
import { darkTheme } from '../src/theme';

export default create({
	base: 'dark',
	brandTitle: 'Sportaj.ga',
	brandUrl: 'https://sportaj.ga',
	brandImage: '/sportaj_logo.svg',

	colorPrimary: darkTheme.colors.brand.primary,
	colorSecondary: darkTheme.colors.element.seconday,

	appBg: darkTheme.colors.element.primary,
	appContentBg: darkTheme.colors.element.neutral,
	appBorderColor: darkTheme.colors.element.primary,

	barSelectedColor: darkTheme.colors.brand.primary,
	barBg: darkTheme.colors.element.seconday,

	textColor: darkTheme.colors.text.primary,
	textInverseColor: darkTheme.colors.text.seconday,
	textMutedColor: darkTheme.colors.text.tertiary,

	inputBg: darkTheme.colors.element.tertiary,
	inputTextColor: darkTheme.colors.element.primary,
	inputBorderColor: darkTheme.colors.element.seconday
});
