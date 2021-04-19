import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './infrastructure/theme/GlobalStyles';
import { useTheme } from './infrastructure/theme/useTheme';
import NavBar from './components/NavBar';
import Register from './features/login/screens/Register';
import Splash from './components/Splash';
import Home from './components/Home';

function App() {
	return (
		<>
			{/* <Home /> */}
			<Register />
		</>
	);
}

export default App;
