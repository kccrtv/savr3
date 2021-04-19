import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../infrastructure/theme/GlobalStyles';
import { useTheme } from '../infrastructure/theme/useTheme';
import NavBar from '../components/NavBar';

function Home(props) {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	useEffect(() => {
		setSelectedTheme(theme);
	}, [themeLoaded]);
	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<NavBar />
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
