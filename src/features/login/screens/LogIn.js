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
	GoogleButton,
} from '../../../infrastructure/theme/components/theme';
import logo from '../../../assets/logo-lg.svg';
import google from '../../../assets/google-logo.png';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
// import { useAuthState } from 'react-firebase-hooks/auth';
const auth = firebase.auth();

function SignIn(props) {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<>
			<Button
				type='submit'
				fullWidth
				variant='contained'
				color='default'
				onClick={signInWithGoogle}
				className={props.className}
				disabled={props.disabled}>
				<img className='g-logo' src={google} alt='google button' />
				Sign in with Google
			</Button>
		</>
	);
}

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
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function LogIn() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const classes = useStyles();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/');
		} catch {
			setError('Failed to log in');
		}
		setLoading(false);
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
				<h1>Sign in</h1>
				{error && <Alert severity='error'>{error}</Alert>}
				<form className={classes.form} onSubmit={handleSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						// autoComplete='email'
						autoFocus
						inputRef={emailRef}
						color='secondary'
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						inputRef={passwordRef}
						color='secondary'
					/>
					{/* <FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/> */}
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='default'
						className={classes.submit}
						disabled={loading}>
						Sign In
					</Button>
					<SignIn className={classes.submit} disabled={loading} />
					<Grid container>
						<Grid item xs>
							<Link to='/forgot-password' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to='/signup' variant='body2'>
								Don't have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
