import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../infrastructure/theme/components/GlobalStyles';
import { useTheme } from '../../../infrastructure/theme/components/useTheme';
import NavBar from '../components/NavBar';
import { useAuth } from '../../../infrastructure/contexts/AuthContext';
import SimplePopover from '../components/SimplePopover';
import RecipeOverview from './RecipeOverview';
import Community from './Community';
import Results from './Results';
const key = process.env.REACT_APP_API_KEY;

function Home() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	const [error, setError] = useState('');
	const [recipe, setRecipe] = useState();
	const [ingredients, setIngredients] = useState([]);

	async function showRecipe() {
		try {
			await fetch(
				`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc890?key=${key}`
			)
				.then((res) => res.json())
				.then((res) => {
					let recipe = res.data.recipe;
					let ingredientsObject = recipe.ingredients;

					const ingredientsArray = ingredientsObject.map((item) => {
						let quantity = item.quantity;
						let unit = item.unit;
						let description = item.description;
						return `${quantity} ${unit} ${description}`;
					});

					setIngredients(ingredientsArray);

					recipe = {
						id: recipe.id,
						title: recipe.title,
						publisher: recipe.publisher,
						sourceUrl: recipe.source_url,
						image: recipe.image_url,
						servings: recipe.servings,
						cookingTime: recipe.cooking_time,
						ingredients: [ingredients],
					};

					setRecipe(recipe);
				});
		} catch {
			setError('Failed to show recipe');
		}
	}

	useEffect(() => {
		setSelectedTheme(theme);
		// showRecipe();
	}, []);

	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<NavBar />
					<main id='home'>
						<Results />
						{recipe ? (
							<RecipeOverview
								key={recipe.id}
								title={recipe.title}
								publisher={recipe.publisher}
								sourceUrl={recipe.sourceUrl}
								image={recipe.image}
								servings={recipe.servings}
								cookingTime={recipe.cookingTime}
								ingredients={recipe.ingredients}
							/>
						) : null}
						{/* <Community /> */}
					</main>
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
