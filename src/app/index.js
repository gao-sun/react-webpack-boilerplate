// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as mobx from 'mobx';
import { Provider } from 'mobx-react';

// Services
import storeService from 'services/store';
import apiService from 'services/api';

// UI components
import Home from 'components/home';

// Configure vendors
mobx.configure({ enforceActions: true });

// Configure services
storeService.setServices({ apiService });

const App = () => (
	<Provider { ...storeService }>
		<Router>
			<Route exact path='/' component={ Home } />
		</Router>
	</Provider>
);

export default DEV ? require('react-hot-loader').hot(module)(App) : App;
