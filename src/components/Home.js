import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../infrastructure/theme/GlobalStyles';
import { useTheme } from '../infrastructure/theme/useTheme';
import NavBar from '../components/NavBar';
import ParallaxCarousel from './Parallax';
import { Button } from '@material-ui/core';
import { Alert, Pagination } from '@material-ui/lab';
import { useAuth } from '../contexts/AuthContext';
import CustomCard from './CustomCard';

const Main = styled.main`
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

function Home() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);

	useEffect(() => {
		setSelectedTheme(theme);
	}, [themeLoaded]);

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
						<div>
							<h1>Recipe</h1>
							<img
								width={'10%'}
								src='https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg'
								alt='recipe'
							/>
							<h2>Equipment</h2>
							<ul>
								<li>thing</li>
								<li>other thing</li>
								<li>thing</li>
								<li>other thing</li>
							</ul>
							<h2>Steps</h2>
							<p>
								This is one recipe a lot of people have requested and I have
								tried to make it as simple as possible and I hope it will work
								for you. Make sure you use the right flour which is basically
								one with raising agents. Adjust the amount of sugar to your
								taste and try using different flavours to have variety whenever
								you have them.\r\nYou can use Coconut milk instead of regular
								milk, you can also add desiccated coconut to the dry flour or
								other spices like powdered cloves or cinnamon.\r\nFor “healthy
								looking” mandazis do not roll the dough too thin before frying
								and use the procedure I have indicated above.\r\n\r\n1. Mix the
								flour,cinnamon and sugar in a suitable bowl.\r\n2. In a separate
								bowl whisk the egg into the milk\r\n3. Make a well at the centre
								of the flour and add the milk and egg mixture and slowly mix to
								form a dough.\r\n4. Knead the dough for 3-4 minutes or until it
								stops sticking to the sides of the bowl and you have a smooth
								surface.\r\n5. Cover the dough with a damp cloth and allow to
								rest for 15 minutes.\r\n6. Roll the dough on a lightly floured
								surface into a 1cm thick piece.\r\n7. Using a sharp small knife,
								cut the dough into the desired size setting aside ready for deep
								frying.\r\n8. Heat your oil in a suitable pot and gently dip the
								mandazi pieces to cook until light brown on the first side then
								turn to cook on the second side.\r\n9. Serve them warm or cold
							</p>
						</div>
						<div>
							<h2>What the people are saying</h2>
						</div>
					</Main>
				</ThemeProvider>
			)}
		</>
	);
}

export default Home;
