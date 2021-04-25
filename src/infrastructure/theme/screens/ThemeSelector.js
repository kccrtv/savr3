import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useTheme } from '../components/useTheme';
import { getFromLS } from '../../../utils/storage';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ThemedButton = styled.button`
	border: none;
	cursor: pointer;
	text-align: center;
	margin: 0 4px;
	padding: 4px 16px;
	height: 32px;
`;

const Wrapper = styled.li`
	display: inline;
	text-align: center;
	list-style: none;
	margin: 0;
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
			<ThemedButton
				onClick={(theme) => themeSwitcher(props.theme)}
				style={{
					backgroundColor: `${
						data[_.camelCase(props.theme.name)].colors.button.background
					}`,
					color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
				}}>
				{props.theme.name}
				<Wrapper
					style={{
						color: `${data[_.camelCase(props.theme.name)].colors.text}`,
					}}></Wrapper>
			</ThemedButton>
		);
	};

	return (
		<Container>
			{themes.length > 0 &&
				themes.map((theme) => (
					<ThemeCard theme={data[theme]} key={data[theme].id} />
				))}
		</Container>
	);
}
