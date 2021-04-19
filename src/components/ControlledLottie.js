import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/cooking.json';
import styled from 'styled-components';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { GlobalStyle } from '../infrastructure/theme/theme';

const ControlledDiv = styled.div`
	align-items: center;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ControlledButton = styled.button`
	background-color: transparent;
	display: flex;
	align-items: center;
`;

class ControlledLottie extends Component {
	state = { isStopped: false, isPaused: false };

	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: animationData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
			},
		};

		return (
			<ControlledDiv>
				<GlobalStyle />
				<Lottie
					options={defaultOptions}
					height={320}
					width={320}
					isStopped={this.state.isStopped}
					isPaused={this.state.isPaused}
				/>
				<ButtonContainer>
					<ControlledButton onClick={() => this.setState({ isStopped: true })}>
						<StopIcon /> Stop
					</ControlledButton>
					<ControlledButton
						onClick={() =>
							this.setState({ isStopped: false, isPaused: false })
						}>
						<PlayArrowIcon /> Play
					</ControlledButton>
					<ControlledButton
						onClick={() => this.setState({ isPaused: !this.state.isPaused })}>
						<PauseIcon /> Pause
					</ControlledButton>
				</ButtonContainer>
			</ControlledDiv>
		);
	}
}

export default ControlledLottie;
