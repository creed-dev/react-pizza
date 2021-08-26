import React from 'react';
import Categories from './Categories';
import PizzaBlock from './PizzaBlock';
import Sort from './Sort';

const Content = ({ pizzas }) => {
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort items={['популярности', 'цене', 'алфавиту']} />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{pizzas.map(pizza => {
						return <PizzaBlock key={`${pizza}_${pizza.id}`} pizza={pizza} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Content;
