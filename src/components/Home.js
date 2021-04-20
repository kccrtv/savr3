import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../infrastructure/theme/GlobalStyles';
import { useTheme } from '../infrastructure/theme/useTheme';
import NavBar from '../components/NavBar';
import ParallaxCarousel from './Parallax';
import styled from 'styled-components';

const Main = styled.main`
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

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
					<Main>
						<ParallaxCarousel />
					</Main>
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
