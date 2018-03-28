import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from 'components/home';

const App = () => 
	<Router>
		<Route exact path='/' component={ Home } />
	</Router>
;

ReactDOM.render(
	<App />,
	document.getElementById('app')
);