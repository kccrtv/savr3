import React from 'react';
import { Link } from 'react-router-dom';
import {
	SplashBG,
	GlobalStyle,
	LogoImg,
} from '../../../infrastructure/theme/components/theme.js';
import ControlledLottie from '../../../features/dashboard/components/ControlledLottie';
import logo from '../../../assets/logo-lg.svg';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { app } from '../../../features/login/components/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function Register() {
	const [user] = useAuthState(auth);
	return (
		<>
			<SplashBG>
				<GlobalStyle />
				<LogoImg src={logo} alt='' />
				<div>
					<h1>Register</h1>
					{/* <button>Register with Google</button> */}
					<SignIn />
					<Link to='/signup'>
						<button>Sign Up</button>
					</Link>
					<Link to='/login'>
						<button>Log In</button>
					</Link>
				</div>
				<ControlledLottie />

				{/* {user ? <ChatRoom /> : <SignIn />} */}
			</SplashBG>
		</>
	);
}

export default Register;

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<>
			<button className='sign-in' onClick={signInWithGoogle}>
				Sign in with Google
			</button>
			<p>
				Do not violate the community guidelines or you will be banned for life!
			</p>
		</>
	);
}
