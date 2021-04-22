import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './infrastructure/theme/components/GlobalStyles';
import { useTheme } from './infrastructure/theme/components/useTheme';
import NavBar from './features/dashboard/components/NavBar';
import Register from './features/login/screens/Register';
import Splash from './features/dashboard/components/Splash';
import Home from './features/dashboard/screens/Home';
import LogIn from './features/login/screens/LogIn';
import SignUp from './features/login/screens/SignUp';
import { Link } from 'react-router-dom';
import { AuthProvider } from './infrastructure/contexts/AuthContext';
import { FaveContextProvider } from './infrastructure/contexts/FaveContext';
import ForgotPassword from './features/login/screens/ForgotPassword';
import UpdateProfile from './features/login/screens/UpdateProfile';
import { Update } from '@material-ui/icons';
import PrivateRoute from './features/login/screens/PrivateRoute';

function App() {
	return (
		<>
			{/* <Home /> */}
			{/* <Register /> */}
			<AuthProvider>
				<FaveContextProvider>
					<Router>
						<Switch>
							{/* <Route exact path='/' component={Home} /> */}
							<PrivateRoute exact path='/' component={Home} />
							<Route path='/signup' component={SignUp} />
							<Route path='/login' component={LogIn} />
							<Route path='/register' component={Register} />
							<Route path='/forgot-password' component={ForgotPassword} />
							<Route path='/update' component={UpdateProfile} />
						</Switch>
					</Router>
				</FaveContextProvider>
			</AuthProvider>
		</>
	);
}

export default App;
