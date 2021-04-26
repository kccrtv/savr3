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
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import { useAuthState } from 'react-firebase-hooks/auth';
// const auth = firebase.auth();
import { auth } from '../../../features/login/components/firebase';

// function SignIn() {
// 	const signInWithGoogle = () => {
// 		const provider = new firebase.auth.GoogleAuthProvider();
// 		auth.signInWithPopup(provider);
// Using a popup.
// var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
// firebase
// 	.auth()
// 	.signInWithPopup(provider)
// 	.then(function (result) {
// 		// This gives you a Google Access Token.
// 		var token = result.credential.accessToken;
// 		// The signed-in user info.
// 		var user = result.user;
// 	});
// };

// 	return (
// 		<>
// 			<GoogleButton onClick={signInWithGoogle}>
// 				<img className='g-logo' src={google} alt='google button' />
// 				Sign in with Google
// 			</GoogleButton>
// 		</>
// 	);
// }

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
					{/* <SignIn /> */}

					<Link to='/signup'>
						<SignUpButton>Sign up with email </SignUpButton>
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
