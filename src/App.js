import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './features/login/components/firebase';
import { AuthProvider } from './infrastructure/contexts/AuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import PrivateRoute from './features/login/screens/PrivateRoute';
import Home from './features/dashboard/screens/Home';
import UpdateProfile from './features/login/screens/UpdateProfile';
import SignUp from './features/login/screens/SignUp';
import LogIn from './features/login/screens/LogIn';
import Welcome from './features/login/screens/Welcome';
import ForgotPassword from './features/login/screens/ForgotPassword';
import RecipeOverview from './features/dashboard/screens/RecipeOverview';

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
								<Route path='/details/:id' component={RecipeOverview} />
								<Route path='/update' component={UpdateProfile} />
							</Switch>
						</>
					) : (
						<>
							<Switch>
								<Route exact path='/' component={Welcome} />
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
