import React from 'react';
// import { Pagination } from '@material-ui/lab';
import CustomCard from './CustomCard';
import styled from 'styled-components';

const ResultsDiv = styled.div`
	grid-column: 1;
	display: flex;
	flex-wrap: wrap;
	// overflow: auto;
	overflow-x: hidden;
	overflow-y: scroll;
	max-height: 95vh;
	list-style: none;
	margin: 0 auto;
	padding: 1rem 0 0 0;
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

function Results(props) {
	return (
		<>
			{/* <Pagination className='pagination' count={3} /> */}
			<ResultsDiv>
				{/* <ResultsList> */}
				<CustomCard />
				<CustomCard />
				<CustomCard />
				<CustomCard />
				{/* </ResultsList> */}
			</ResultsDiv>
		</>
	);
}

export default Results;
