import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './infrastructure/theme/GlobalStyles';
import { useTheme } from './infrastructure/theme/useTheme';
import NavBar from './components/NavBar';
import Register from './features/login/screens/Register';
import Splash from './components/Splash';
import Home from './components/Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

function App() {
	return (
		<>
			{/* <Home /> */}
			{/* <Register /> */}
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/signup' component={SignUp} />
						<Route path='/login' component={SignIn} />
						<Route path='/register' component={Register} />
					</Switch>
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
