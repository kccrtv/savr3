import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../infrastructure/theme/GlobalStyles';
import { useTheme } from '../infrastructure/theme/useTheme';
import NavBar from '../components/NavBar';
import ParallaxCarousel from './Parallax';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAuth } from '../contexts/AuthContext';
import CustomCard from './CustomCard';
import { Pagination } from '@material-ui/lab';

const Main = styled.main`
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

function Home() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	const [error, setError] = useState('');
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	useEffect(() => {
		setSelectedTheme(theme);
	}, [themeLoaded]);

	async function handleLogout() {
		setError('');

		try {
			await logout();
			history.push('/login');
		} catch {
			setError('Failed to log out');
		}
	}

	return (
		<>
			{themeLoaded && (
				<ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<NavBar />
					<Main id='home'>
						{/* <h1>Profile</h1>
						{error && <Alert variant='error'>{error}</Alert>}
						<h2>{currentUser.email}</h2>
						<Link to='/update'>Update Profile</Link>
						<Button onClick={handleLogout}>Log Out</Button> */}
						{/* <ParallaxCarousel /> */}
						<div className='results'>
							<Pagination className='pagination' count={3} />
							<CustomCard />
						</div>
					</Main>
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
