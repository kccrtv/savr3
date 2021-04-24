import React from 'react';
// import { Pagination } from '@material-ui/lab';
import { Link, useHistory } from 'react-router-dom';
import CustomCard from './CustomCard';
import styled from 'styled-components';
import fire from '../../../assets/fire.svg';
import moon from '../../../assets/moon.svg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ResultsDiv = styled.div`
	grid-column: 1;
	// display: flex;
	// flex-wrap: wrap;
	// align-items: center;

	// flex-direction: row;
	// overflow-x: hidden;
	// overflow-y: scroll;
	max-height: 95vh;
	list-style: none;
	margin: 0 auto;
	padding: 1rem 0 0 0;
	width: 35vw;

	& img {
		height: 80px;
		border-radius: 16px;
	}

	& a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		padding: 16px 0 16px 16px;
		margin: 8px 0;
		border-bottom: 2px solid #356859;
	}

	& svg {
		font-size: 3rem;
	}
`;

const ResultTitle = styled.h2`
	display: inline-flex;
`;

const ResultsList = styled.ul`
	// overflow: auto;
    overflow-y: scroll
	max-height: 95vh;
	list-style: none;
	margin: 0 auto;
	padding: 1rem 0 0 0;
	// display: flex;
	// flex-direction: column;
`;

function ResultItem(props) {
	return (
		<Link to={props.link}>
			<img src={props.img} alt='recipe result' />
			<ResultTitle>{props.title}</ResultTitle>
			<ArrowRightIcon />
		</Link>
	);
}

function Results(props) {
	return (
		<>
			{/* <Pagination className='pagination' count={3} /> */}
			<ResultsDiv>
				<ResultItem link='/' img={fire} title='Pizza' />

				{/* <CustomCard />
				<CustomCard />
				<CustomCard />
				<CustomCard /> */}
			</ResultsDiv>
		</>
	);
}

export default Results;
