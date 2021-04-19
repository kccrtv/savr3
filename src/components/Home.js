import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
	LogoButton,
	LogoDiv,
	SplashBG,
	LightTheme,
	GlobalStyle,
} from '../infrastructure/theme/theme';

export default function Home(props) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={LightTheme}>
				<h1>Savr</h1>
			</ThemeProvider>
		</>
	);
}
