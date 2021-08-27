import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Content from './components/Content';
import Header from './components/Header';
import { setPizzasAC } from './redux/pizzas-reducer';

const App = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzasAC(data));
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
