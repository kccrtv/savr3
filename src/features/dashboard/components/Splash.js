import React from 'react';
import {
	LogoButton,
	LogoDiv,
	SplashBG,
} from '../../../infrastructure/theme/components/theme';
import logo from '../../../assets/logo-lg.svg';

export default function Splash(props) {
	return (
		<>
			<SplashBG>
				<LogoDiv>
					<LogoButton>
						<img src={logo} alt='savr logo' />
					</LogoButton>
				</LogoDiv>
			</SplashBG>
		</>
	);
}
