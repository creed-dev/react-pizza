// action types
const ADD_TO_CART = 'cart-reducer/ADD_TO_CART';
const REMOVE_CART = 'cart-reducer/REMOVE_CART';
const REMOVE_CART_ITEM = 'cart-reducer/REMOVE_CART_ITEM';
const PLUS_CART_ITEM = 'cart-reducer/PLUS_CART_ITEM';
const MINUS_CART_ITEM = 'cart-reducer/MINUS_CART_ITEM';

// initial state
const initialState = {
	totalCount: 0,
	totalPrice: 0,
	items: {},
};

const getTotalPrice = arr =>
	arr.reduce((sum, item) => {
		return item.price + sum;
	}, 0);

// reducer
export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			const currentPizzaItem = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload];
			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItem,
					totalPrice: getTotalPrice(currentPizzaItem),
				},
			};
			const totalCount = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].items.length + sum,
				0
			);
			const totalPrice = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].totalPrice + sum,
				0
			);

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		}
		case REMOVE_CART:
			return {
				...state,
				totalCount: 0,
				totalPrice: 0,
				items: {},
			};
		case REMOVE_CART_ITEM: {
			const newItems = {
				...state.items,
			};
			const currentTotalPrice = newItems[action.payload].totalPrice;
			const currentTotalCount = newItems[action.payload].items.length;
			delete newItems[action.payload];
			return {
				...state,
				items: newItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount,
			};
		}
		case PLUS_CART_ITEM: {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			];
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				},
			};

			const totalCount = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].items.length + sum,
				0
			);
			const totalPrice = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].totalPrice + sum,
				0
			);

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		}
		case MINUS_CART_ITEM: {
			const oldItems = state.items[action.payload].items;
			const newObjItems =
				oldItems.length > 1
					? state.items[action.payload].items.slice(1)
					: oldItems;
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				},
			};

			const totalCount = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].items.length + sum,
				0
			);
			const totalPrice = Object.keys(newItems).reduce(
				(sum, key) => newItems[key].totalPrice + sum,
				0
			);

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		}

		default:
			return state;
	}
};

// action creators
export const addToCartAC = objPizza => ({
	type: ADD_TO_CART,
	payload: objPizza,
});

export const removeCartAC = () => ({
	type: REMOVE_CART,
});

export const removeCartItemAC = id => ({
	type: REMOVE_CART_ITEM,
	payload: id,
});

export const plusCartItemAC = id => ({
	type: PLUS_CART_ITEM,
	payload: id,
});

export const minusCartItemAC = id => ({
	type: MINUS_CART_ITEM,
	payload: id,
});
