import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@material-ui/icons';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import DotIndicator from '@mui-treasury/components/indicator/dot';
import { useArrowDarkButtonStyles } from '@mui-treasury/styles/button/arrowDark';
import { Link } from 'react-router-dom';
// import mealData from '../services/mock.json';

const data = [
	{
		id: 1,
		title: 'Chicken Ham and Leek Pie',
		subtitle: 'Chicken',
		image:
			// eslint-disable-next-line max-len
			'https://www.themealdb.com/images/media/meals/x372ug1598733932.jpg',
		// 'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media',
	},
	{
		id: 2,
		title: 'Tahini Lentils',
		subtitle: 'Vegetarian',
		image:
			// eslint-disable-next-line max-len
			'https://www.themealdb.com/images/media/meals/vpxyqt1511464175.jpg',
		// 'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media',
	},
	{
		id: 3,
		title: 'Mulukhiyah',
		subtitle: 'Beef',
		image:
			// eslint-disable-next-line max-len
			'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg',
		// 'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media',
	},
];

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
	root: {
		// a must if you want to set arrows, indicator as absolute
		position: 'relative',
		width: '50%',
	},
	slide: {
		margin: '0 auto',
		perspective: 1000, // create perspective
		overflow: 'hidden',
		// relative is a must if you want to create overlapping layers in children
		// position: 'relative',
		position: 'relative',
		paddingTop: spacing(8),
		// [breakpoints.up('sm')]: {
		// 	paddingTop: spacing(10),
		// },
		// [breakpoints.up('md')]: {
		// 	paddingTop: spacing(14),
		// },
	},
	imageContainer: {
		display: 'block',
		position: 'relative',

		zIndex: 2,
		paddingBottom: '56.25%',
	},
	image: {
		display: 'block',
		position: 'absolute',
		zIndex: 10,
		borderRadius: '50%',
		filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))',
		// width: '100%',
		// height: '100%',
		width: '50%',
		height: '90%',
		objectFit: 'cover',
		marginTop: '11%',
		marginLeft: '44%',
		[breakpoints.up('sm')]: {
			marginLeft: '44%',
		},
	},
	arrow: {
		display: 'none',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		[breakpoints.up('sm')]: {
			display: 'inline-flex',
		},
	},
	arrowLeft: {
		left: 0,
		[breakpoints.up('lg')]: {
			left: -64,
		},
	},
	arrowRight: {
		right: 0,
		[breakpoints.up('lg')]: {
			right: -64,
		},
	},
	text: {
		// shared style for text-top and text-bottom
		fontFamily: 'Berkshire Swash, cursive',
		// fontWeight: 900,
		position: 'relative',
		// position: 'absolute',

		padding: '0 8px',
		transform: 'rotateY(45deg)',
		lineHeight: 1.2,
		[breakpoints.up('sm')]: {
			padding: '0 16px',
		},
		[breakpoints.up('md')]: {
			padding: '0 24px',
		},
	},
	title: {
		top: '12%',
		left: '10%',
		height: '100%',
		fontSize: '3.5rem',
		zIndex: 1,
		background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #F2AC32 100%)',
		[breakpoints.up('sm')]: {
			top: '12%',
			// top: 40,
			fontSize: '3.5rem',
		},
		[breakpoints.up('md')]: {
			top: 69,
			fontSize: '3.5rem',
		},
	},
	subtitle: {
		fontFamily: 'Open Sans, sans-serif',
		top: 60,
		left: '2%',
		height: '82%',
		fontSize: '1.5rem',
		zIndex: 2,
		background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #AD7D00 100%)',
		[breakpoints.up('sm')]: {
			top: 72,
			left: '2%',
			fontSize: '1.5rem',
		},
		[breakpoints.up('md')]: {
			top: 128,
			fontSize: '1.5rem',
		},
	},
	indicatorContainer: {
		textAlign: 'center',
	},
}));

const ParallaxCarousel = () => {
	const classes = useStyles();
	const arrowStyles = useArrowDarkButtonStyles();
	const createStyle = (slideIndex, fineIndex) => {
		const diff = slideIndex - fineIndex;
		if (Math.abs(diff) > 1) return {};
		return {
			transform: `rotateY(${(-diff + 1) * 45}deg)`,
		};
	};
	// eslint-disable-next-line react/prop-types
	const renderElements = ({ index, onChangeIndex }) => (
		<>
			<Button
				className={cx(classes.arrow, classes.arrowLeft)}
				classes={arrowStyles}
				disabled={index === 0}
				onClick={() => onChangeIndex(index - 1)}>
				<KeyboardArrowLeft />
			</Button>
			<Button
				className={cx(classes.arrow, classes.arrowRight)}
				classes={arrowStyles}
				disabled={index === data.length - 1}
				onClick={() => onChangeIndex(index + 1)}>
				<KeyboardArrowRight />
			</Button>
			<div className={classes.indicatorContainer}>
				{data.map(({ id }, i) => (
					<DotIndicator
						key={id}
						active={i === index}
						onClick={() => onChangeIndex(i)}
					/>
				))}
			</div>
		</>
	);
	const renderChildren = ({ injectStyle, fineIndex }) =>
		data.map(({ id, title, subtitle, image }, i) => (
			<div key={id} className={classes.slide}>
				{console.log(mealData.meals[0].strMeal)}
				<Typography
					id='title'
					// noWrap
					className={cx(classes.text, classes.title)}
					style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}>
					{title}
				</Typography>
				<Typography
					id='subtitle'
					noWrap
					className={cx(classes.text, classes.subtitle)}
					style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}>
					{subtitle}
				</Typography>
				<div className={classes.imageContainer}>
					<Link to='/'>
						<img className={classes.image} src={image} alt={'slide'} />
					</Link>
				</div>
			</div>
		));
	return (
		<div className={classes.root}>
			<ParallaxSlide renderElements={renderElements}>
				{renderChildren}
			</ParallaxSlide>
		</div>
	);
};

export default ParallaxCarousel;
