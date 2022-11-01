export interface SportajGaTheme {
	isDark: boolean;
	colors: {
		brand: {
			primary: string;
			light: string;
			dark: string;
		};
		text: {
			primary: string;
			seconday: string;
			tertiary: string;
			success: string;
			error: string;
			white: string;
			link: string;
		};
		element: {
			primary: string;
			seconday: string;
			tertiary: string;
			success: string;
			error: string;
			neutral: string;
		};
	};
	fontFamily: {
		main: string;
	};
}

export const darkTheme: SportajGaTheme = {
	isDark: true,
	colors: {
		brand: {
			primary: '#F95700',
			light: '#FF7931',
			dark: '#E04E00'
		},
		text: {
			primary: '#1B1B1B',
			seconday: '#696969',
			tertiary: '#B4B4B4',
			success: '#5CC689',
			error: '#EE7D52',
			white: '#FFFFFF',
			link: '#25949B'
		},
		element: {
			primary: '#1B1B1B',
			seconday: '#696969',
			tertiary: '#B4B4B4',
			success: '#5CC689',
			error: '#EE7D52',
			neutral: '#EAEAEA'
		}
	},
	fontFamily: {
		main: "'Montserrat', sans-serif"
	}
};

// TODO: Add light theme

export const lightTheme: SportajGaTheme = {
	...darkTheme,
	isDark: false
};
