import React from 'react';
import { Link } from 'react-router-dom';
import {
	SplashBG,
	RightSide,
	GlobalStyle,
	LogoImg,
	GoogleButton,
	SignUpButton,
	LogInP,
	LogInSpan,
} from '../../../infrastructure/theme/components/theme.js';
import ControlledLottie from '../../dashboard/components/ControlledLottie';
import logo from '../../../assets/logo-lg.svg';
import google from '../../../assets/google-logo.png';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
// import { useAuthState } from 'react-firebase-hooks/auth';
const auth = firebase.auth();

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<>
			<GoogleButton onClick={signInWithGoogle}>
				<img className='g-logo' src={google} alt='google button' />
				Sign in with Google
			</GoogleButton>
		</>
	);
}

function Welcome() {
	// const [user] = useAuthState(auth);
	return (
		<main>
			<GlobalStyle />
			<SplashBG>
				<LogoImg src={logo} alt='savr flame' />
				<h1>Connect with foodies and at-home chefs on Savr.</h1>
			</SplashBG>
			<RightSide>
				<ControlledLottie />
				<div>
					<SignIn />

					<Link to='/signup'>
						<SignUpButton>Sign up with email instead</SignUpButton>
					</Link>
					<LogInP>Already have an account?</LogInP>
					<Link to='/login'>
						<LogInSpan>Log In</LogInSpan>
					</Link>
				</div>
			</RightSide>
			{/* {user ? <ChatRoom /> : <SignIn />} */}
		</main>
	);
}

export default Welcome;
