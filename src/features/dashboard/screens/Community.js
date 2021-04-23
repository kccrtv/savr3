import React from 'react';
import styled from 'styled-components';
import { RecipeDiv } from '../../../infrastructure/theme/components/GlobalStyles';

const CommunityDiv = styled.div`
	max-height: 95vh;
	padding: 16px;
	// width: 25vw;
`;

function Community(props) {
	return (
		<CommunityDiv>
			<h2>What the people are saying</h2>
		</CommunityDiv>
	);
}

export default Community;
