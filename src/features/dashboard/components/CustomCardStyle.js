import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import Fave from '../../../features/favorite/components/Fave.js';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useFave } from '../../../infrastructure/contexts/FaveContext';
import { MicNone } from '@material-ui/icons';

export const useStyles = makeStyles(() => ({
	actionArea: {
		borderRadius: 16,
		width: '100%',
		// margin: '8px 16px 0 16px',
		transition: '0.2s',
		'&:hover': {
			transform: 'scale(1.1)',
			zIndex: 2,
		},
	},
	card: ({ color }) => ({
		minWidth: 160,
		borderRadius: 16,
		boxShadow: 'none',
		'&:hover': {
			boxShadow: `0 6px 12px 0 ${Color(color)
				.rotate(-12)
				.darken(0.2)
				.fade(0.5)}`,
		},
	}),
	content: ({ color }) => {
		return {
			// backgroundColor: 'transparent',
			borderTop: '#AD7D00 3px solid',
			padding: '1rem 1.5rem 1.5rem',
		};
	},
	title: {
		fontFamily: 'Berkshire Swash, cursive',
		fontSize: '1.2rem',
		// color: '#fff',
		textTransform: 'none',
	},
	// subtitle: {
	// 	fontFamily: 'Open Sans, sans-serif',
	// 	textTransform: 'uppercase',
	// 	color: '#fff',
	// 	opacity: 0.87,
	// 	marginTop: '2rem',
	// 	fontWeight: 500,
	// 	fontSize: '0.8rem',
	// },
}));

const CustomCardStyle = ({ classes, image, title, subtitle }) => {
	const { faves } = useFave();

	const mediaStyles = useFourThreeCardMediaStyles();
	return (
		<CardActionArea className={classes.actionArea} disableRipple>
			<Card className={classes.card}>
				<CardMedia classes={mediaStyles} image={image} />
				<CardContent className={classes.content}>
					{console.log(faves)}
					<Fave />
					<Typography id='title' className={classes.title} variant={'h3'}>
						{title}
					</Typography>
					{/* <Typography id='subtitle' className={classes.subtitle}>
						{subtitle}
					</Typography> */}
				</CardContent>
			</Card>
		</CardActionArea>
	);
};

export default CustomCardStyle;
