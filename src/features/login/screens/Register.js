import React from 'react';
import {
	SplashBG,
	GlobalStyle,
	LogoImg,
} from '../../../infrastructure/theme/theme';
import ControlledLottie from '../../../components/ControlledLottie';
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
				</div>
				<ControlledLottie />
			</SplashBG>
		</>
	);
}

export default Register;
