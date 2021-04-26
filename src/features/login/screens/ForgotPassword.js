import React, { useRef, useState } from 'react';
import { useAuth } from '../../../infrastructure/contexts/AuthContext';
import { Link } from 'react-router-dom';
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
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Check your inbox to reset your password');
		} catch {
			setError('Failed to reset password');
		}

		setLoading(false);
	}

	const classes = useStyles();
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
				<h1>Password Reset</h1>
				{error && <Alert severity='error'>{error}</Alert>}
				{message && <Alert severity='success'>{message}</Alert>}
				<form className={classes.form} onSubmit={handleSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoFocus
						inputRef={emailRef}
						color='secondary'
					/>

					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='default'
						className={classes.submit}
						disabled={loading}>
						Reset Password
					</Button>
					<Grid container>
						<Grid item xs>
							<Link to='/login' variant='body2'>
								Log in
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
