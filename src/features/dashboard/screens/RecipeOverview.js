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
	DetailsDiv,
	InfoDiv,
	DirectionsDiv,
} from '../../../infrastructure/theme/components/GlobalStyles';

function RecipeOverview(props) {
	return (
		<RecipeDiv>
			<RecipeFigure>
				<RecipeTitle>
					<RecipeSpan>{props.title}</RecipeSpan>
				</RecipeTitle>
				<RecipeImg src={props.image} alt='recipe' />
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
