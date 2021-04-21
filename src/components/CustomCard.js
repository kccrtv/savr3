import React from 'react';
import Color from 'color';
import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import {
	NoSsr,
	Grid,
	Typography,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import Fave from '../features/Fave';
// import NoSsr from '@material-ui/core/NoSsr';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useFave } from '../contexts/FaveContext';

const useGridStyles = makeStyles(({ breakpoints }) => ({
	root: {
		width: '10%',
		[breakpoints.up('md')]: {
			justifyContent: 'center',
		},
	},
}));

const useStyles = makeStyles(() => ({
	actionArea: {
		borderRadius: 16,
		margin: '8px 16px 0 16px',
		transition: '0.2s',
		'&:hover': {
			transform: 'scale(1.1)',
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
			backgroundColor: color,
			padding: '1rem 1.5rem 1.5rem',
			// width: 160,
		};
	},
	title: {
		fontFamily: 'Berkshire Swash, cursive',
		fontSize: '1.2rem',
		color: '#fff',
	},
	subtitle: {
		fontFamily: 'Open Sans, sans-serif',
		textTransform: 'uppercase',
		color: '#fff',
		opacity: 0.87,
		marginTop: '2rem',
		fontWeight: 500,
		fontSize: '0.8rem',
	},
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
	const { faves } = useFave();

	console.log(faves);
	const mediaStyles = useFourThreeCardMediaStyles();
	return (
		<CardActionArea className={classes.actionArea}>
			<Fave />
			<Card className={classes.card}>
				<CardMedia classes={mediaStyles} image={image} />
				<CardContent className={classes.content}>
					<Typography id='title' className={classes.title} variant={'h2'}>
						{title}
					</Typography>
					<Typography id='subtitle' className={classes.subtitle}>
						{subtitle}
					</Typography>
				</CardContent>
			</Card>
		</CardActionArea>
	);
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
	const gridStyles = useGridStyles();
	const styles = useStyles({ color: '#FD5523' });
	const styles2 = useStyles({ color: '#37966F' });
	const styles3 = useStyles({ color: '#ff9900' });
	return (
		<>
			<div className='column-1'>
				<Grid
					classes={gridStyles}
					container
					direction='column'
					// spacing={4}

					wrap={'nowrap'}>
					<Grid item>
						<CustomCard
							classes={styles}
							title={'Pizza Express Margherita'}
							subtitle={'Miscellaneous'}
							image={
								'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg'
							}
						/>
					</Grid>
					<Grid item>
						<CustomCard
							classes={styles2}
							title={'Tuna Nicoise'}
							subtitle={'Seafood'}
							image={
								'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg'
							}
						/>
					</Grid>
					<Grid item>
						<CustomCard
							classes={styles3}
							title={'Peanut Butter Cookies'}
							subtitle={'Dessert'}
							image={
								'https://www.themealdb.com/images/media/meals/1544384070.jpg'
							}
						/>
					</Grid>
				</Grid>
			</div>
			<div className='column-2'>
				<Grid item>
					<CustomCard
						classes={styles2}
						title={'Home-made Mandazi'}
						subtitle={'Breakfast'}
						image={
							'https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg'
						}
					/>
				</Grid>
				<Grid
					classes={gridStyles}
					container
					direction='column'
					// spacing={4}
					wrap={'nowrap'}>
					<Grid item>
						<CustomCard
							classes={styles}
							title={'Pizza Express Margherita'}
							subtitle={'Miscellaneous'}
							image={
								'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg'
							}
						/>
					</Grid>
					<Grid item>
						<CustomCard
							classes={styles2}
							title={'Tuna Nicoise'}
							subtitle={'Seafood'}
							image={
								'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg'
							}
						/>
					</Grid>
				</Grid>
			</div>
		</>
	);
});
export default SolidGameCardDemo;
