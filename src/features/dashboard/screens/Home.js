import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
	GlobalStyles,
	ResultsDiv,
	ResultTitle,
	ResultsString,
} from '../../../infrastructure/theme/components/GlobalStyles';
import { useTheme } from '../../../infrastructure/theme/components/useTheme';
import NavBar from '../components/NavBar';
import RecipeOverview from './RecipeOverview';
import Community from './Community';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const key = process.env.REACT_APP_API_KEY;
const path = 'https://forkify-api.herokuapp.com/api/v2/recipes';

function Home() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	const [recipe, setRecipe] = useState();
	const [ingredients, setIngredients] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [lastSearch, setLastSearch] = useState('');
	const [resultDataObjects, setResultDataObjects] = useState([]);
	const [recipePath, setRecipePath] = useState('');

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		recipeResults(searchString);
	}

	function handleClick(event) {
		event.preventDefault();
		setRecipePath(event.target.pathname.substring(1));
		let recipeUrl = `${path}/${recipePath}?key=${key}`;
		getRecipeDetails(recipeUrl);
	}

	function getRecipeDetails(recipeUrl) {
		fetch(recipeUrl)
			.then((res) => res.json())
			.then((res) => {
				let recipeData = res.data.recipe;

				let ingredientsObject = recipeData.ingredients;

				const ingredientsArray = ingredientsObject.map((item) => {
					let quantity = item.quantity;
					let unit = item.unit;
					let description = item.description;
					return `${quantity} ${unit} ${description}`;
				});

				setIngredients(ingredientsArray);

				recipeData = {
					id: recipeData.id,
					title: recipeData.title,
					publisher: recipeData.publisher,
					sourceUrl: recipeData.source_url,
					image: recipeData.image_url,
					servings: recipeData.servings,
					cookingTime: recipeData.cooking_time,
					ingredients: [ingredients],
				};
				setRecipe(recipeData);
			})
			.catch(console.error);
	}

	function recipeResults(searchString) {
		const searchUrl = `${path}?search=${searchString}&key=${key}`;
		fetch(searchUrl)
			.then((res) => res.json())
			.then((res) => {
				const results = res.data.recipes;
				const items = results.map((result, index) => {
					if (result) {
						index++;
						return {
							key: result.id,
							link: result.id,
							img: result.image_url,
							title: result.title,
						};
					}
				});
				setLastSearch(searchString);
				setSearchString('');
				setResultDataObjects(items);
			})
			.catch(console.error);
	}

	useEffect(() => {
		setSelectedTheme(theme);
		recipeResults(searchString);
	}, []);

	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<NavBar
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						searchString={searchString}
					/>
					<main id='home'>
						{resultDataObjects ? (
							<ResultsString>{searchString}</ResultsString>
						) : null}
						<ResultsDiv>
							{resultDataObjects
								? resultDataObjects.map((res, index) => {
										if (res) {
											index++;

											return (
												<Link onClick={handleClick} to={res.link} key={res.key}>
													<img src={res.img} alt='recipe result' />
													<ResultTitle>{res.title}</ResultTitle>
													<ArrowRightIcon />
												</Link>
											);
										}
								  })
								: null}
						</ResultsDiv>

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

						<Community />
					</main>
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
