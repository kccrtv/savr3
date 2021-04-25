import React from 'react';
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

function RecipeOverview(props) {
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
					<>
						<ServingsButton>-</ServingsButton>
						<ServingsButton>+</ServingsButton>
					</>
				</InfoDiv>
			</DetailsDiv>
			<IngredientsDiv>
				<h3>Ingredients</h3>
				<IngredientsUl>
					{ingredientsArray &&
						ingredientsArray.forEach((ing) => {
							// return <IngredientsLi>{ing}</IngredientsLi>;
							return <p>{ing}</p>;
						})}
				</IngredientsUl>
			</IngredientsDiv>

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
