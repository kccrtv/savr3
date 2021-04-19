// 1: Import
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import WebFont from 'webfontloader';
import { GlobalStyles } from './infrastructure/theme/GlobalStyles';
import { useTheme } from './infrastructure/theme/useTheme';
import ThemeSelector from './infrastructure/theme/ThemeSelector';

// 2: Create a cotainer
const Container = styled.div`
	margin: 5px auto 5px auto;
`;

function App() {
	// 3: Get the selected theme, font list, etc.
	const { theme, themeLoaded, getIcons } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	useEffect(() => {
		setSelectedTheme(theme);
	}, [themeLoaded]);

	// 4: Load all the fonts
	// useEffect(() => {
	// 	WebFont.load({
	// 		google: {
	// 			families: getFonts(),
	// 		},
	// 	});
	// });

	// 5: Render if the theme is loaded.
	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<Container>
						<ThemeSelector setter={setSelectedTheme} />
					</Container>
				</ThemeProvider>
			)}
		</>
	);
}

export default App;

// import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import {
// 	DarkTheme,
// 	LightTheme,
// 	GlobalStyle,
// } from './infrastructure/theme/theme';
// // import Home from './components/Home';
// import ThemeContent from './infrastructure/theme/ThemeContent';

// export default function App(props) {
// 	return (
// 		<>
// 			{/* <GlobalStyle /> */}
// 			{/* <ThemeProvider theme={LightTheme}> */}
// 			<ThemeContent />
// 			{/* </ThemeProvider> */}
// 		</>
// 	);
// }
