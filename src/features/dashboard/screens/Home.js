import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../infrastructure/theme/components/GlobalStyles';
import { useTheme } from '../../../infrastructure/theme/components/useTheme';
import NavBar from '../components/NavBar';
import { useAuth } from '../../../infrastructure/contexts/AuthContext';

import RecipeOverview from './RecipeOverview';
import Community from './Community';
import Results from './Results';
const key = process.env.REACT_APP_API_KEY;

function Home() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	let query = 'pizza';
	const searchUrl = ` https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=${key}`;

	function searchRecipes() {
		return fetch(searchUrl)
			.then((res) => res.json())
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		setSelectedTheme(theme);
		// searchRecipes();
	}, [themeLoaded]);

	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<NavBar />
					<main id='home'>
						{/* <h1>Profile</h1>
						{error && <Alert variant='error'>{error}</Alert>}
						<h2>{currentUser.email}</h2>
						<Link to='/update'>Update Profile</Link>
						<Button onClick={handleLogout}>Log Out</Button> */}
						{/* <ParallaxCarousel /> */}
						<Results />
						<RecipeOverview />
						<Community />
					</main>
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
