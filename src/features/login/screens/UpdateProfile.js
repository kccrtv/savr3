import React, { useRef, useState } from 'react';
import { useAuth } from '../../../infrastructure/contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Typography,
	Container,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import {
	GlobalStyle,
	LogoImg,
	LogoButton,
} from '../../../infrastructure/theme/components/theme';
import logo from '../../../assets/logo-lg.svg';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' to='/welcome'>
				Savr 3.0
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function UpdateProfile() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updateEmail, updatePassword } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const classes = useStyles();

	function handleSubmit(event) {
		event.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		const promises = [];
		setLoading(true);
		setError('');

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push('/');
			})
			.catch(() => {
				setError('Failed to update profile');
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<Container component='main' maxWidth='xs'>
			<GlobalStyle />
			<CssBaseline />
			<div className={classes.paper}>
				<LogoButton>
					<Link to='/welcome'>
						<LogoImg className='medium-logo' src={logo} alt='savr flame' />
					</Link>
				</LogoButton>
				<h1>Update Profile</h1>

				{error && <Alert severity='error'>{error}</Alert>}
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								defaultValue={currentUser.email}
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								inputRef={emailRef}
								// required
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								autoFocus='true'
								fullWidth
								name='password'
								label='Password (Leave blank to keep the same)'
								type='password'
								id='password'
								placeholder='Leave blank to keep the same'
								autoComplete='new-password'
								inputRef={passwordRef}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								fullWidth
								name='password'
								label='Confirm Password (Leave blank to keep the same)'
								type='password'
								id='password-confirm'
								placeholder='Leave blank to keep the same'
								// autoComplete='hidden'
								inputRef={passwordConfirmRef}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='default'
						className={classes.submit}
						disabled={loading}>
						Update
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link to='/' variant='body2'>
								Cancel
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
