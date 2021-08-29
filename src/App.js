import React from 'react';
import Main from './pages/Main';
import Cart from './pages/Cart';
import { Route } from 'react-router-dom';
import Header from './components/Header';

const App = props => {
	return (
		<div className="wrapper">
			<Header />
			<Route path="/" exact component={Main} />
			<Route path="/cart" exact component={Cart} />
		</div>
	);
};

export default App;
