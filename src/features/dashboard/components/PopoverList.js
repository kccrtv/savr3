import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styled from 'styled-components';

const QueryListItemStyle = styled.div`
	background-color: #555556;
	opacity: 0.8;
`;

function QueryListItem(props) {
	return (
		<QueryListItemStyle>
			<ListItem>
				<ListItemText>{props.item}</ListItemText>
			</ListItem>
		</QueryListItemStyle>
	);
}

function PopoverList(props) {
	return (
		<>
			<QueryListItem item='asparagus' />
		</>
	);
}

export default PopoverList;
