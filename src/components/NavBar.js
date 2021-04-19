// 1: Import
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../infrastructure/theme/GlobalStyles';
import { useTheme } from '../infrastructure/theme/useTheme';
import ThemeSelector from '../infrastructure/theme/ThemeSelector';
import flame from '../assets/fire.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const Logo = styled.div`
	display: inline-block;
	padding-bottom: 8px;
`;

const Flame = styled.img`
	height: 56px;
	margin: 0;
	padding: 16px 16px 0 16px;
`;

const Savr = styled.a`
	font-family: 'Berkshire Swash', cursive;
	font-size: 3rem;
	margin-top: 0;
	vertical-align: bottom;
`;
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		marginRight: theme.spacing(3),
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		flexGrow: 1,
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

function NavBar(props) {
	const { theme, themeLoaded, getIcons } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	useEffect(() => {
		setSelectedTheme(theme);
	}, [themeLoaded]);

	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />

					<AppBar color='transparent' position='static'>
						<Toolbar>
							<Logo className={classes.title} noWrap>
								<Flame src={flame} alt='flame' />
								<Savr>Savr</Savr>
							</Logo>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder='Search…'
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ 'aria-label': 'search' }}
								/>
							</div>

							<Button
								aria-controls='fade-menu'
								aria-haspopup='true'
								onClick={handleClick}>
								<MenuIcon />
							</Button>
							<Menu
								id='fade-menu'
								anchorEl={anchorEl}
								keepMounted
								open={open}
								onClose={handleClose}
								TransitionComponent={Fade}>
								<MenuItem onClick={handleClose}>
									<ThemeSelector setter={setSelectedTheme} />
								</MenuItem>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
								<MenuItem onClick={handleClose}>Logout</MenuItem>
							</Menu>
						</Toolbar>
					</AppBar>
				</ThemeProvider>
			)}
		</>
	);
}

export default NavBar;
