import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import PizzasLoader from '../components/common/PizzasLoader';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import { addToCartAC } from '../redux/cart-reducer';
import { fetchPizzas } from '../redux/pizzas-reducer';

const Main = props => {
	const dispatch = useDispatch();
	const contentState = useSelector(({ pizzas, filters, cart }) => {
		return {
			items: pizzas.items,
			isLoaded: pizzas.isLoaded,
			activeCategory: filters.category,
			activeSort: filters.sortBy,
			activeOrder: filters.order,
			cartItems: cart.items,
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

	const addPizzaToCart = obj => {
		dispatch(addToCartAC(obj));
	};

	return (
		<div>
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories activeCategory={contentState.activeCategory} />
						<Sort activeSort={contentState.activeSort} />
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
							return (
								<PizzaBlock
									onClickAddPizza={addPizzaToCart}
									key={`${pizza}_${pizza.id}`}
									pizza={pizza}
									addedCount={
										contentState.cartItems[pizza.id] &&
										contentState.cartItems[pizza.id].items.length
									}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
