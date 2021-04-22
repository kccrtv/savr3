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
} from '../../../infrastructure/theme/components/theme';
import logo from '../../../assets/logo-lg.svg';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' to='/register'>
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

export default function SignUp() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const classes = useStyles();

	async function handleSubmit(event) {
		event.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		try {
			setError('');
			setLoading(true);
			await signup(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch {
			setError('Failed to create an account');
		}

		setLoading(false);
	}

	return (
		<Container component='main' maxWidth='xs'>
			<GlobalStyle />
			<CssBaseline />
			<div className={classes.paper}>
				{/* <Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar> */}
				<LogoImg src={logo} alt='savr flame' />
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				{/* <form className={classes.form} noValidate> */}
				{error && <Alert severity='error'>{error}</Alert>}
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{/* <Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
							/>
						</Grid> */}
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								// autoComplete='hidden'
								inputRef={emailRef}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								// autoComplete='hidden'
								inputRef={passwordRef}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Confirm Password'
								type='password'
								id='password-confirm'
								// autoComplete='hidden'
								inputRef={passwordConfirmRef}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						disabled={loading}>
						Sign Up
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link to='/login' variant='body2'>
								Already have an account? Log in
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
