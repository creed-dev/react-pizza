import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartEmpty from '../components/CartEmpty';
import CartNotEmpty from '../components/CartNotEmpty';
import CartPizzaItem from '../components/CartPizzaItem';
import {
	minusCartItemAC,
	plusCartItemAC,
	removeCartAC,
	removeCartItemAC,
} from '../redux/cart-reducer';

const Cart = props => {
	const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);
	const dispatch = useDispatch();

	const addedPizza = Object.keys(items).map(key => {
		return items[key].items[0];
	});
	const onRemoveCart = () => {
		if (window.confirm('Вы действительно хотите очистить всю корзину?')) {
			dispatch(removeCartAC());
		}
	};

	const onRemoveCartItem = id => {
		if (window.confirm('Вы действительно хотите удалить пиццу?')) {
			dispatch(removeCartItemAC(id));
		}
	};

	const onPlusCartItem = id => {
		dispatch(plusCartItemAC(id));
	};

	const onMinusCartItem = id => {
		dispatch(minusCartItemAC(id));
	};

	return (
		<div className="content">
			<div className="container container--cart">
				{totalCount ? (
					<CartNotEmpty
						onRemoveCart={onRemoveCart}
						onRemoveCartItem={onRemoveCartItem}
						addedPizza={addedPizza}
						items={items}
						totalCount={totalCount}
						totalPrice={totalPrice}
						onPlusCartItem={onPlusCartItem}
						onMinusCartItem={onMinusCartItem}
					/>
				) : (
					<CartEmpty />
				)}
			</div>
		</div>
	);
};

export default Cart;
