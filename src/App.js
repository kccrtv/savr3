import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './infrastructure/contexts/AuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import PrivateRoute from './features/login/screens/PrivateRoute';
import Home from './features/dashboard/screens/Home';
import UpdateProfile from './features/login/screens/UpdateProfile';
import SignUp from './features/login/screens/SignUp';
import LogIn from './features/login/screens/LogIn';
import Welcome from './features/login/screens/Welcome';
import ForgotPassword from './features/login/screens/ForgotPassword';

import Results from './features/dashboard/screens/Results';

const auth = firebase.auth();

function App() {
	const [user] = useAuthState(auth);
	return (
		<>
			<AuthProvider>
				<Router>
					{user ? (
						<>
							<Switch>
								<PrivateRoute exact path='/' component={Home} />

								<Route path='/update' component={UpdateProfile} />
							</Switch>
						</>
					) : (
						<>
							<Switch>
								<Route path='/signup' component={SignUp} />
								<Route path='/login' component={LogIn} />
								<Route path='/welcome' component={Welcome} />
								<Route path='/forgot-password' component={ForgotPassword} />
							</Switch>
						</>
					)}
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
