import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CustomCardStyle from '../components/CustomCardStyle';
import { useStyles } from '../components/CustomCardStyle';

const useGridStyles = makeStyles(({ breakpoints }) => ({
	root: {
		width: '45%',
		padding: 16,
		margin: 8,
		[breakpoints.up('md')]: {
			justifyContent: 'center',
		},
	},
}));

export const CustomCard = React.memo(function CustomCard() {
	const gridStyles = useGridStyles();
	const colorsArray = [
		'#FD5523',
		'#37966F',
		'#FF9900',
		'#FD825D',
		'#356859',
		'#F2AC32',
		'#4A927D',
	];
	const styles0 = useStyles({ color: colorsArray[6] });
	return (
		// <div className='column-1'>
		<Grid classes={gridStyles} container direction='column' wrap={'nowrap'}>
			<Grid item>
				<CustomCardStyle
					classes={styles0}
					title={'Pizza Express Margherita'}
					subtitle={'Miscellaneous'}
					image={
						'https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg'
					}
				/>
			</Grid>
		</Grid>
		// </div>
	);
});
export default CustomCard;
