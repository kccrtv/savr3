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
	const [error, setError] = useState('');
	const [recipe, setRecipe] = useState();
	// let query = 'pizza';
	// const searchUrl = ` https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=${key}`;

	// function searchRecipes() {
	// 	return fetch(
	// 		`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=${key}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			console.log('test');
	// 		})
	// 		.catch((err) => console.log(err));
	// }

	async function showRecipe() {
		try {
			await fetch(
				`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=${key}`
			)
				.then((res) => res.json())
				.then((res) => {
					let recipe = res.data.recipe;

					recipe = {
						id: recipe.id,
						title: recipe.title,
						publisher: recipe.publisher,
						sourceUrl: recipe.source_url,
						image: recipe.image_url,
						servings: recipe.servings,
						cookingTime: recipe.cooking_time,
						ingredients: recipe.ingredients,
					};
					console.log(recipe.ingredients);
					setRecipe(recipe);
				});
		} catch {
			setError('Failed to show recipe');
		}
	}

	useEffect(() => {
		setSelectedTheme(theme);
		// searchRecipes();
		showRecipe();
		console.log(recipe);
	}, []);

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
						{recipe ? (
							<RecipeOverview
								// key={recipe.id}
								title={recipe.title}
								publisher={recipe.publisher}
								sourceUrl={recipe.sourceUrl}
								image={recipe.image}
								servings={recipe.servings}
								cookingTime={recipe.cookingTime}
								ingredients={recipe.ingredients[0].quantity}
							/>
						) : null}
						<Community />
					</main>
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
