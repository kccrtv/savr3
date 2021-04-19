import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _, { lastIndexOf } from 'lodash';
import { useTheme } from './useTheme';
import { getFromLS } from '../../utils/storage';
import moon from '../../assets/moon.svg';
import lightbulb from '../../assets/lightbulb.svg';
import theme from 'styled-theming';

const Container = styled.div`
	padding: 0 16px;
	display: flex;
	justify-content: flex-end;
`;

const IconImg = styled.img`
	width: 22px;
	fill: #ad7d00;
`;

const ThemedButton = styled.button`
	border: none;
	font-size: 14px;
	cursor: pointer;
`;

const Wrapper = styled.li`
	display: inline-block;
	text-align: center;
	border-radius: 4px;
	list-style: none;
	padding: 8px;
`;

export default function ThemeSelector(props) {
	const themesFromStore = getFromLS('all-themes');
	const [data, setData] = useState(themesFromStore.data);
	const [themes, setThemes] = useState([]);
	const { setMode } = useTheme();

	const themeSwitcher = (selectedTheme) => {
		console.log(selectedTheme);
		setMode(selectedTheme);
		props.setter(selectedTheme);
	};

	useEffect(() => {
		setThemes(_.keys(data));
	}, [data]);

	useEffect(() => {
		props.newTheme && updateThemeCard(props.newTheme);
	}, [props.newTheme]);

	const updateThemeCard = (theme) => {
		const key = _.keys(theme)[0];
		const updated = { ...data, [key]: theme[key] };
		setData(updated);
	};

	const ThemeCard = (props) => {
		return (
			<Wrapper
				style={{
					color: `${data[_.camelCase(props.theme.name)].colors.text}`,
				}}>
				<ThemedButton
					onClick={(theme) => themeSwitcher(props.theme)}
					style={{
						backgroundColor: `${
							data[_.camelCase(props.theme.name)].colors.button.background
						}`,
						color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
					}}>
					{props.theme.name}
				</ThemedButton>
			</Wrapper>
		);
	};

	return (
		<Container>
			<IconImg src={lightbulb} alt='light' />
			{themes.length > 0 &&
				themes.map((theme) => (
					<ThemeCard theme={data[theme]} key={data[theme].id} />
				))}
			<IconImg src={moon} alt='dark' />
		</Container>
	);
}
