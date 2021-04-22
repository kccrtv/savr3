import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../../App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as themes from '../../../infrastructure/theme/schema.json';
import { setToLS } from '../../../utils/storage';

const Index = () => {
	setToLS('all-themes', themes.default);
	return <App />;
};

ReactDOM.render(
	<Router>
		<Index />
	</Router>,
	document.getElementById('root')
);
