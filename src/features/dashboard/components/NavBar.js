// 1: Import
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../infrastructure/contexts/AuthContext';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../infrastructure/theme/components/GlobalStyles';
import { useTheme } from '../../../infrastructure/theme/components/useTheme';
import ThemeSelector from '../../../infrastructure/theme/screens/ThemeSelector';
import flame from '../../../assets/fire.svg';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {
	AppBar,
	Toolbar,
	InputBase,
	Menu,
	MenuItem,
	Fade,
	Button,
} from '@material-ui/core';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import SimplePopover from './SimplePopover';
const auth = firebase.auth();

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

const SearchForm = styled.form`
	margin: 0 32px 0 0;
	cursor: pointer;
	background: transparent;
	border: 1px solid black;
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
		flexGrow: 2,
		// position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: theme.shape.borderRadius,
		// backgroundColor: fade(theme.palette.common.white, 0.15),
		// '&:hover': {
		// 	backgroundColor: fade(theme.palette.common.white, 0.25),
		// },
		marginLeft: 0,
		// width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		// position: 'absolute',
		pointerEvents: 'none',
		// display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: 'transparent',
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
	popover: {
		pointerEvents: 'none',
	},
	paper: {
		padding: theme.spacing(1),
	},
}));

function NavBar({ handleChange, handleSubmit, searchString }) {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	// const [error, setError] = useState('');
	// const { currentUser, logout } = useAuth();
	// const history = useHistory();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	// async function handleLogout() {
	// 	setError('');
	// 	setAnchorEl(null);
	// 	try {
	// 		await logout();
	// 		history.push('/login');
	// 	} catch {
	// 		setError('Failed to log out');
	//		return error;
	// 	}
	// }

	useEffect(() => {
		setSelectedTheme(theme);
	}, [themeLoaded]);

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
							<SimplePopover />
							<div className={classes.search}>
								<SearchForm onSubmit={handleSubmit}>
									<InputBase
										placeholder='Search…'
										classes={{
											root: classes.inputRoot,
											input: classes.inputInput,
										}}
										inputProps={{ 'aria-label': 'search' }}
										onChange={handleChange}
										value={searchString}></InputBase>
									{/* <button type='submit' className={classes.searchIcon}>
										<SearchIcon />
									</button> */}
								</SearchForm>
							</div>

							<Button
								aria-controls='fade-menu'
								aria-haspopup='true'
								onClick={handleClick}
								className='btn'>
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

								<MenuItem onClick={handleClose}>
									<Link className='menu' to='/update'>
										Update Profile
									</Link>
								</MenuItem>
								<MenuItem onClick={() => auth.signOut()}>
									<Link to='/login' className='menu'>
										Logout
									</Link>
								</MenuItem>
							</Menu>
						</Toolbar>
					</AppBar>
				</ThemeProvider>
			)}
		</>
	);
}

export default NavBar;
