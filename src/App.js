import React from 'react';
import Main from './pages/Main';
import Cart from './pages/Cart';
import { Route } from 'react-router-dom';

const App = props => {
	return (
		<div className="wrapper">
			<Route path="/" exact component={Main} />
			<Route path="/cart" exact component={Cart} />
		</div>
	);
};

export default App;
