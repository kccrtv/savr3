import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
	ResultsDiv,
	ResultTitle,
	EmptyHeader,
} from '../../../infrastructure/theme/components/GlobalStyles';

function Results({ resultDataObjects }) {
	if (!resultDataObjects) {
		return (
			<EmptyHeader>
				What's on your menu today?{' '}
				<span role='img' aria-label='chef'>
					👩🏽‍🍳
				</span>
			</EmptyHeader>
		);
	}

	return (
		<>
			<ResultsDiv>
				{resultDataObjects
					? resultDataObjects.map((res) => {
							return (
								<Link to={res.link}>
									<img src={res.img} alt='recipe result' />
									<ResultTitle>{res.title}</ResultTitle>
									<ArrowRightIcon />
								</Link>
							);
					  })
					: null}
			</ResultsDiv>
		</>
	);
}

export default Results;
