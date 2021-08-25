import React from 'react';
import Categories from './Categories';
import PizzaBlock from './PizzaBlock';
import Sort from './Sort';

const Content = props => {
	return (
		<div className="content">
			<div className="container">
				<div className="content__top">
					<Categories />
					<Sort items={['популярности', 'цене', 'алфавиту']} />
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					<PizzaBlock />
				</div>
			</div>
		</div>
	);
};

export default Content;
