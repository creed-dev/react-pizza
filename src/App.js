import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Content from './components/Content';
import Header from './components/Header';
import { setPizzasAC } from './redux/pizzas-reducer';

const App = props => {
	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			props.setPizzas(data.pizzas);
		});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<Content pizzas={props.pizzas} />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		pizzas: state.pizzas.pizzas,
	};
};

const mapDispatchToProps = dispatch => {
	return { setPizzas: pizzas => dispatch(setPizzasAC(pizzas)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
