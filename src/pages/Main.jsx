import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import PizzasLoader from '../components/common/PizzasLoader';
import Header from '../components/Header';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { fetchPizzas } from '../redux/pizzas-reducer';

const Main = props => {
	const dispatch = useDispatch();

	const contentState = useSelector(state => {
		return {
			items: state.pizzas.items,
			isLoaded: state.pizzas.isLoaded,
			activeCategory: state.filters.category,
			activeSort: state.filters.sortBy,
			activeOrder: state.filters.order,
		};
	});

	useEffect(() => {
		dispatch(
			fetchPizzas(
				contentState.activeCategory,
				contentState.activeSort,
				contentState.activeOrder
			)
		);
	}, [contentState.activeCategory, contentState.activeSort]);

	const sortItems = [
		{
			name: 'популярности',
			sortBy: 'rating',
			order: 'desc',
		},
		{
			name: 'цене',
			sortBy: 'price',
			order: 'desc',
		},
		{
			name: 'алфавиту',
			sortBy: 'name',
			order: 'asc',
		},
	];

	return (
		<div>
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories
							items={[
								'Мясные',
								'Вегетарианские',
								'Гриль',
								'Острые',
								'Закрытые',
							]}
							activeCategory={contentState.activeCategory}
						/>
						<Sort items={sortItems} activeSort={contentState.activeSort} />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{!contentState.isLoaded &&
							Array(12)
								.fill(0)
								.map((obj, index) => {
									return (
										<PizzasLoader
											className="pizza-block"
											key={`${obj}_${index}`}
										/>
									);
								})}
						{contentState.items.map(pizza => {
							return <PizzaBlock key={`${pizza}_${pizza.id}`} pizza={pizza} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;