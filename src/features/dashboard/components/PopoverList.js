import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styled from 'styled-components';

const QueryListItemStyle = styled.div`
	background-color: #f5bbcf;
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
			<QueryListItem item='apple' />
			<QueryListItem item='apricot' />
			<QueryListItem item='arepas' />
			<QueryListItem item='artichoke' />
			<QueryListItem item='asparagus' />
			<QueryListItem item='avocado' />
			<QueryListItem item='bacon' />
			<QueryListItem item='banana' />
			<QueryListItem item='basil' />
			<QueryListItem item='bbq' />
			<QueryListItem item='bean' />
			<QueryListItem item='beef' />
			<QueryListItem item='beetroot' />
			<QueryListItem item='blackberry' />
			<QueryListItem item='blackcurrant' />
			<QueryListItem item='blueberry' />
			<QueryListItem item='boysenberry' />
			<QueryListItem item='broccoli' />
			<QueryListItem item='brussel sprouts' />
			<QueryListItem item='bunny chow' />
			<QueryListItem item='cabbage' />
			<QueryListItem item='cake' />
			<QueryListItem item='carrot' />
			<QueryListItem item='cauliflower' />
			<QueryListItem item='celery' />
			<QueryListItem item='cherry' />
			<QueryListItem item='chicken' />
			<QueryListItem item='chickpea' />
			<QueryListItem item='chili' />
			<QueryListItem item='chips' />
			<QueryListItem item='chocolate' />
			<QueryListItem item='cinnamon' />
			<QueryListItem item='coconut' />
			<QueryListItem item='coriander' />
			<QueryListItem item='corn' />
			<QueryListItem item='crab' />
			<QueryListItem item='croissant' />
			<QueryListItem item='cucumber' />
			<QueryListItem item='curry' />
			<QueryListItem item='dill' />
			<QueryListItem item='donuts' />
			<QueryListItem item='duck' />
			<QueryListItem item='fajitas' />
			<QueryListItem item='fig' />
			<QueryListItem item='fish' />
			<QueryListItem item='fries' />
			<QueryListItem item='garlic' />
			<QueryListItem item='goat' />
			<QueryListItem item='grape' />
			<QueryListItem item='grapefruit' />
			<QueryListItem item='green bean' />
			<QueryListItem item='green pepper' />
			<QueryListItem item='ham' />
			<QueryListItem item='hamburger' />
			<QueryListItem item='hummus' />
			<QueryListItem item='ice cream' />
			<QueryListItem item='kebab' />
			<QueryListItem item='ketchup' />
			<QueryListItem item='kiwifruit' />
			<QueryListItem item='lamb' />
			<QueryListItem item='lasagna' />
			<QueryListItem item='leek' />
			<QueryListItem item='lemon' />
			<QueryListItem item='lentil' />
			<QueryListItem item='lettuce' />
			<QueryListItem item='lime' />
			<QueryListItem item='lobster' />
			<QueryListItem item='lychee' />
			<QueryListItem item='mandarin' />
			<QueryListItem item='mango' />
			<QueryListItem item='maple syrup' />
			<QueryListItem item='marzipan' />
			<QueryListItem item='masala' />
			<QueryListItem item='melon' />
			<QueryListItem item='mushrooms' />
			<QueryListItem item='nectarine' />
			<QueryListItem item='onion' />
			<QueryListItem item='orange' />
			<QueryListItem item='oregano' />
			<QueryListItem item='paella' />
			<QueryListItem item='papaya' />
			<QueryListItem item='parma ham' />
			<QueryListItem item='parsley' />
			<QueryListItem item='passion fruit' />
			<QueryListItem item='pasta' />
			<QueryListItem item='peach' />
			<QueryListItem item='pear' />
			<QueryListItem item='peas' />
			<QueryListItem item='pepperoni' />
			<QueryListItem item='pie' />
			<QueryListItem item='pierogi' />
			<QueryListItem item='pineapple' />
			<QueryListItem item='pizza' />
			<QueryListItem item='plum' />
			<QueryListItem item='poke' />
			<QueryListItem item='pomegranate' />
			<QueryListItem item='popcorn' />
			<QueryListItem item='pork' />
			<QueryListItem item='potato' />
			<QueryListItem item='poutine' />
			<QueryListItem item='pudding' />
			<QueryListItem item='pumpkin' />
			<QueryListItem item='quince' />
			<QueryListItem item='radish' />
			<QueryListItem item='raspberry' />
			<QueryListItem item='red pepper' />
			<QueryListItem item='rendang' />
			<QueryListItem item='ribs' />
			<QueryListItem item='rosemary' />
			<QueryListItem item='saffron' />
			<QueryListItem item='salad' />
			<QueryListItem item='salami' />
			<QueryListItem item='sausage' />
			<QueryListItem item='seafood' />
			<QueryListItem item='som tam' />
			<QueryListItem item='steak' />
			<QueryListItem item='strawberry' />
			<QueryListItem item='sushi' />
			<QueryListItem item='sweet potato' />
			<QueryListItem item='tacos' />
			<QueryListItem item='toast' />
			<QueryListItem item='tofu' />
			<QueryListItem item='tomato' />
			<QueryListItem item='turkey' />
			<QueryListItem item='watermelon' />
			<QueryListItem item='zucchini' />
		</>
	);
}

export default PopoverList;
