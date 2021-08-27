import React from 'react';
import { useSelector } from 'react-redux';
import Categories from './Categories';
import Preloader from './common/Preloader';
import PizzaBlock from './PizzaBlock';
import Sort from './Sort';

const Content = props => {
	const contentState = useSelector(state => {
		return {
			items: state.pizzas.items,
			isLoaded: state.pizzas.isLoaded,
		};
	});
	console.log(contentState.isLoaded);

	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort items={['популярности', 'цене', 'алфавиту']} />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{!contentState.isLoaded && <Preloader />}
					{contentState.items.map(pizza => {
						return <PizzaBlock key={`${pizza}_${pizza.id}`} pizza={pizza} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Content;
