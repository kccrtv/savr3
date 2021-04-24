import React, { useState, useEffect, useRef } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './infrastructure/theme/components/GlobalStyles';
import { useTheme } from './infrastructure/theme/components/useTheme';
import NavBar from './features/dashboard/components/NavBar';
import Welcome from './features/login/screens/Welcome';
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
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { app } from './features/login/components/firebase';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
	const [user] = useAuthState(auth);
	return (
		<>
			<AuthProvider>
				<FaveContextProvider>
					<Router>
						{user ? (
							<>
								<Switch>
									{/* <ChatRoom /> */}
									<PrivateRoute exact path='/' component={Home} />

									<Route path='/update' component={UpdateProfile} />
								</Switch>
							</>
						) : (
							<>
								<Switch>
									{/* <Route exact path='/'>
										{!user ? <Redirect exact to='/welcome' /> : <Welcome />}
									</Route> */}
									<Route path='/signup' component={SignUp} />
									<Route path='/login' component={LogIn} />
									<Route path='/welcome' component={Welcome} />
									<Route path='/forgot-password' component={ForgotPassword} />
								</Switch>
							</>
						)}
						{/* <SignOut /> */}
					</Router>
				</FaveContextProvider>
			</AuthProvider>
		</>
	);
}

// function SignIn() {
// 	const signInWithGoogle = () => {
// 		const provider = new firebase.auth.GoogleAuthProvider();
// 		auth.signInWithPopup(provider);
// 	};

// 	return (
// 		<>
// 			<button className='sign-in' onClick={signInWithGoogle}>
// 				Sign in with Google
// 			</button>
// 			<p>
// 				Do not violate the community guidelines or you will be banned for life!
// 			</p>
// 		</>
// 	);
// }

function SignOut() {
	return (
		auth.currentUser && (
			<button className='sign-out' onClick={() => auth.signOut()}>
				Sign Out
			</button>
		)
	);
}

function ChatRoom() {
	const dummy = useRef();
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	const [formValue, setFormValue] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL } = auth.currentUser;

		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		});

		setFormValue('');
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<main>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

				<span ref={dummy}></span>
			</main>

			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					placeholder='say something nice'
				/>

				<button type='submit' disabled={!formValue}>
					🕊️
				</button>
			</form>
		</>
	);
}

function ChatMessage(props) {
	const { text, uid, photoURL } = props.message;

	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

	return (
		<>
			<div className={`message ${messageClass}`}>
				{photoURL ? <img src={photoURL} alt='avatar' /> : <AccountCircleIcon />}

				<p>{text}</p>
			</div>
		</>
	);
}

export default App;
