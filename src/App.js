import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Content from './components/Content';
import Header from './components/Header';
import { setPizzasAC } from './redux/pizzas-reducer';

const App = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			dispatch(setPizzasAC(data.pizzas));
		});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<Content />
		</div>
	);
};

export default App;
