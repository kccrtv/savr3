import React from 'react';
import { Link } from 'react-router-dom';
import {
	SplashBG,
	GlobalStyle,
	LogoImg,
} from '../../../infrastructure/theme/components/theme.js';
import ControlledLottie from '../../../features/dashboard/components/ControlledLottie';
import logo from '../../../assets/logo-lg.svg';

function Register() {
	return (
		<>
			<SplashBG>
				<GlobalStyle />
				<LogoImg src={logo} alt='' />
				<div>
					<h1>Register</h1>
					<button>Register with Google</button>
					<Link to='/signup'>
						<button>Sign Up</button>
					</Link>
					<Link to='/login'>
						<button>Log In</button>
					</Link>
				</div>
				<ControlledLottie />
			</SplashBG>
		</>
	);
}

export default Register;
