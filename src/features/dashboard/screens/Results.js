import React, { useEffect, useState } from 'react';
// import { Pagination } from '@material-ui/lab';
import { Link } from 'react-router-dom';
// import CustomCard from './CustomCard';
import fire from '../../../assets/fire.svg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
	ResultsDiv,
	ResultTitle,
	ResultsList,
	RecipeSpan,
	EmptyHeader,
} from '../../../infrastructure/theme/components/GlobalStyles';
import styled from 'styled-components';
const key = process.env.REACT_APP_API_KEY;
const path = 'https://forkify-api.herokuapp.com/api/v2/recipes';

// function ResultItem(props) {
// 	return (
// 		<Link to={props.link}>
// 			<img src={props.img} alt='recipe result' />
// 			<ResultTitle>{props.title}</ResultTitle>
// 			<ArrowRightIcon />
// 		</Link>
// 	);
// }

// function Results({ results, loadResults }) {
function Results({ resultDataObjects }) {
	// const [resultUrls, setResultUrls] = useState(null);
	// const [results, setResults] = useState([]);
	// const [resultDataObjects, setResultDataObjects] = useState([]);

	// let searchString = 'paella';
	// function recipeResults(searchString) {
	// 	const searchUrl = `${path}?search=${searchString}&key=${key}`;
	// 	fetch(searchUrl)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setResults(res.data.recipes);
	// 			getResultUrls(results);
	// 			resultBar(results);
	// 		})
	// 		.catch(console.error);
	// }

	// function getResultUrls(results) {
	// 	let idUrl = results.reduce((acc, curr) => {
	// 		return [...acc, `${path}/${curr.id}?key=${key}`];
	// 	}, []);
	// 	setResultUrls(idUrl);
	// }
	// function resultBar(results) {
	// 	let items = results.map((result) => {
	// 		return {
	// 			key: result.id,
	// 			link: `${path}/${result.id}?key=${key}`,
	// 			img: result.image_url,
	// 			title: result.title,
	// 		};

	// 	});
	// 	setResultDataObjects(items);

	// }

	// useEffect(() => {
	// 	recipeResults(searchString);
	// }, []);

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
			{/* <Pagination className='pagination' count={3} /> */}
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
