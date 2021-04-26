import React, { useState, useEffect } from 'react';
import TimerIcon from '@material-ui/icons/Timer';
import GroupIcon from '@material-ui/icons/Group';
import {
	RecipeDiv,
	RecipeFigure,
	RecipeTitle,
	RecipeSpan,
	RecipeP,
	RecipeImg,
	ServingsButton,
	DetailsDiv,
	InfoDiv,
	IngredientsDiv,
	IngredientsUl,
	IngredientsLi,
	DirectionsDiv,
} from '../../../infrastructure/theme/components/GlobalStyles';
const key = process.env.REACT_APP_API_KEY;
const path = 'https://forkify-api.herokuapp.com/api/v2/recipes';
const sampleUrl =
	'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc981?key=73b5da42-a557-42a1-ac62-8fef779deaa4';

function RecipeOverview(props) {
	// useEffect(() => {
	// 	// const recipeId = match;
	// 	const detailsUrl = `${path}/${recipeId}?key=${key}`;

	// 	fetch(detailsUrl)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			console.log('res', res);
	// 			// return setRecipe(res);
	// 		})
	// 		.catch(console.error);
	// }, []);

	// console.log('recipe', recipe);

	let ingredientsArray = props.ingredients;
	// console.log('ingredientsArray', ingredientsArray);
	// console.log('ia0', ingredientsArray[0]);
	// const listedIngredients = ingredientsArray.forEach((item) => {
	// 	// return `'ing: ', ${ing}, 'index: ', ${index}`;
	// 	return <p>{item}</p>;
	// });

	return (
		<RecipeDiv>
			<RecipeFigure>
				<RecipeTitle>
					<RecipeSpan>{props.title}</RecipeSpan>
				</RecipeTitle>

				{/* <RecipeImg image={props.image}> */}
				<RecipeImg src={props.image} alt='recipe' />
				{/* </RecipeImg> */}

				{/* <HeartButton>
					<FavoriteBorderIcon />
				</HeartButton> */}
			</RecipeFigure>
			<DetailsDiv>
				<InfoDiv>
					<TimerIcon /> <RecipeP>{props.cookingTime}</RecipeP>
					<RecipeP>minutes</RecipeP>
				</InfoDiv>
				<InfoDiv>
					<GroupIcon />
					<RecipeP>{props.servings}</RecipeP>
					<RecipeP>servings</RecipeP>
					{/* <>
						<ServingsButton>-</ServingsButton>
						<ServingsButton>+</ServingsButton>
					</> */}
				</InfoDiv>
			</DetailsDiv>

			<DirectionsDiv>
				<h2>Steps</h2>
				<RecipeP>
					Find the recipe details at:{' '}
					<a href={props.sourceUrl}>{props.publisher}</a>
				</RecipeP>
			</DirectionsDiv>
		</RecipeDiv>
	);
}

export default RecipeOverview;
