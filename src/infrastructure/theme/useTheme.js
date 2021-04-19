import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
	const themes = getFromLS('all-themes');
	const [theme, setTheme] = useState(themes.data.light);
	const [themeLoaded, setThemeLoaded] = useState(false);

	const setMode = (mode) => {
		setToLS('theme', mode);
		setTheme(mode);
	};

	const getIcons = () => {
		const allIcons = _.values(_.mapValues(themes.data, 'icon'));
		return allIcons;
	};

	useEffect(() => {
		const localTheme = getFromLS('theme');
		localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
		setThemeLoaded(true);
	}, []);

	return { theme, themeLoaded, setMode, getIcons };
};
