import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { GlobalStyle } from './theme';

export default function ThemeContent(props) {
	const defaultTheme = {
		themeName: '',
		bgColor: '##FFF8E3',
		txtColor: '#262626',
		btnBgColor: '#FFB800',
		btnTxtColor: '#555556',
		linkColor: '#AD7D00',
	};
	return (
		<>
			<h1>theme</h1>
		</>
	);
}
// https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/
