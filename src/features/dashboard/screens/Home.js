import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
	GlobalStyles,
	ResultsDiv,
	ResultTitle,
	ResultsList,
	RecipeSpan,
	EmptyHeader,
	RecipeDiv,
} from '../../../infrastructure/theme/components/GlobalStyles';
import { useTheme } from '../../../infrastructure/theme/components/useTheme';
import NavBar from '../components/NavBar';
import RecipeOverview from './RecipeOverview';
import Community from './Community';
import Results from './Results';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const key = process.env.REACT_APP_API_KEY;
const path = 'https://forkify-api.herokuapp.com/api/v2/recipes';

function Home() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	const [error, setError] = useState('');
	const [recipe, setRecipe] = useState();
	const [ingredients, setIngredients] = useState([]);
	let query = '';
	const [searchString, setSearchString] = useState('');
	const [results, setResults] = useState([]);
	const [lastSearch, setLastSearch] = useState('');
	const [resultUrls, setResultUrls] = useState(null);
	const [resultDataObjects, setResultDataObjects] = useState([]);
	// const [recipeDetails, setRecipeDetails] = useState();
	const [recipePath, setRecipePath] = useState('');

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// getResults(searchString);
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

	// console.log(path);
	// function getResultUrls(results) {
	// 	let idUrl = results.reduce((acc, curr) => {
	// 		return [...acc, `${path}/${curr.id}?key=${key}`];
	// 	}, []);
	// 	setResultUrls(idUrl);
	// }

	// function resultBar(results) {
	// 	let items = results.map((result, index) => {
	// 		if (result) {
	// 			index++;
	// 			return {
	// 				key: result.id,
	// 				link: `${path}/${result.id}?key=${key}`,
	// 				img: result.image_url,
	// 				title: result.title,
	// 			};
	// 		}
	// 	});
	// 	setResultDataObjects(items);
	// }

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

			// setLastSearch(searchString);
			// setSearchString('');
			// setResults(res.data.recipes);

			// const idUrl = results.reduce((acc, curr) => {
			// 	return [...acc, `${path}/${curr.id}?key=${key}`];
			// }, []);
			// setResultUrls(idUrl);

			// setLastSearch(searchString);
			// setSearchString('');
			// setResultDataObjects(items);
			// }))
			.catch(console.error);
	}

	// async function getResults(searchString) {
	// 	const searchUrl = `${path}?search=${searchString}&key=${key}`;
	// 	try {
	// 		await fetch(searchUrl)
	// 			.then((res) => res.json())
	// 			.then((res) => {
	// 				setResults(res.data.recipes);
	// 				getResultUrls(results);
	// 				resultBar(results);
	// 				setLastSearch(searchString);
	// 				setSearchString('');
	// 			});
	// 		// .catch(console.error);
	// 	} catch {
	// 		return console.error;
	// 	}
	// }

	// async function showRecipe() {
	// 	try {
	// 		await fetch(
	// 			`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcf6c?key=${key}`
	// 		)
	// 			.then((res) => res.json())
	// 			.then((res) => {
	// 				let recipe = res.data.recipe;
	// 				let ingredientsObject = recipe.ingredients;

	// 				const ingredientsArray = ingredientsObject.map((item) => {
	// 					let quantity = item.quantity;
	// 					let unit = item.unit;
	// 					let description = item.description;
	// 					return `${quantity} ${unit} ${description}`;
	// 				});

	// 				setIngredients(ingredientsArray);

	// 				recipe = {
	// 					id: recipe.id,
	// 					title: recipe.title,
	// 					publisher: recipe.publisher,
	// 					sourceUrl: recipe.source_url,
	// 					image: recipe.image_url,
	// 					servings: recipe.servings,
	// 					cookingTime: recipe.cooking_time,
	// 					ingredients: [ingredients],
	// 				};

	// 				setRecipe(recipe);
	// 			});
	// 	} catch {
	// 		setError('Failed to show recipe');
	// 		return error;
	// 	}
	// }

	// function ResultItem(props) {
	// 	return (
	// 		<Link to={props.link}>
	// 			<img src={props.img} alt='recipe result' />
	// 			<ResultTitle>{props.title}</ResultTitle>
	// 			<ArrowRightIcon />
	// 		</Link>
	// 	);
	// }

	// function loadResults() {
	// 	if (results) {
	// 		return console.log(results);
	// 	}
	// }

	useEffect(() => {
		setSelectedTheme(theme);
		recipeResults(searchString);
		// resultBar(results);
		// paellaResults(searchString);
		// getResultUrls(results);

		// getResults(searchString);
		// showRecipe();
	}, []);

	// useEffect(()=> {
	// recipeResults(searchString);
	// resultBar(results);
	// })

	// console.log(resultDataObjects);

	// function fullResultsList(resultDataObjects) {
	// 	resultDataObjects.map((res, index) => {
	// 		if (res) {
	// 			index++;
	// 			// ++index;
	// 			return (
	// 				<Link
	// 					onClick={handleClick}
	// 					// to={`/details/${res.link}`}
	// 					to={res.link}
	// 					key={res.key}>
	// 					<img src={res.img} alt='recipe result' />
	// 					<ResultTitle>{res.title}</ResultTitle>
	// 					<ArrowRightIcon />
	// 				</Link>
	// 			);
	// 		}
	// 	});
	// }

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
						<ResultsDiv>
							{/* {resultDataObjects ? (
								resultDataObjects.map((res) => {
									return (
										<Link to={res.link}>
											<img src={res.img} alt='recipe result' />
											<ResultTitle>{res.title}</ResultTitle>
											<ArrowRightIcon />
										</Link>
									);
								})
							) : (
								<EmptyHeader>
									What's on your menu today?{' '}
									<span role='img' aria-label='chef'>
										👩🏽‍🍳
									</span>
								</EmptyHeader>
							)} */}

							{resultDataObjects
								? resultDataObjects.map((res, index) => {
										if (res) {
											index++;
											// ++index;
											return (
												<Link
													onClick={handleClick}
													// to={`/details/${res.link}`}
													to={res.link}
													key={res.key}>
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
