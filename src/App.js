import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Header from './components/Header';

const App = props => {
	const [state, setState] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			setState(data.pizzas);
		});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<Content pizzas={state} />
		</div>
	);
};

export default App;
