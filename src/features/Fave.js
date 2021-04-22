import React, { useContext } from 'react';
import { useFave } from '../contexts/FaveContext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styled from 'styled-components';
import { GlobalStyles } from '../infrastructure/theme/GlobalStyles';

const FaveButton = styled.button`
	&:hover {
		opacity: 1;
	}
`;

function Fave({ recipe }) {
	const { faves, addToFaves, removeFromFaves } = useFave();

	const isFave = faves.find(
		// (x) => x.idMeal === recipe.idMeal
		(x) => console.log(x)
	);

	return (
		<div>
			<GlobalStyles />
			<FaveButton
				onClick={() => (!isFave ? addToFaves(recipe) : removeFromFaves(recipe))}
				className='heart'>
				{/* <FavoriteIcon className='heart' /> */}
				{!isFave ? <FavoriteBorderIcon /> : <FavoriteIcon />}
			</FaveButton>
			{/* <input type='checkbox'></input> */}
		</div>
	);
}

export default Fave;
