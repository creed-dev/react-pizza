// action types
const ADD_TO_CART = 'cart-reducer/ADD_TO_CART';

// initial state
const initialState = {
	totalCount: null,
	totalPrice: 0,
	items: {},
};

// reducer
export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const newItems = {
				...state.items,
				[action.payload.id]: !state.items[action.payload.id]
					? [action.payload]
					: [...state.items[action.payload.id], action.payload],
			};

			const allItems = [].concat.apply([], Object.values(newItems));
			const totalPriceAllItems = allItems.reduce((sum, item) => {
				return sum + item.price;
			}, 0);

			return {
				...state,
				items: newItems,
				totalCount: ++state.totalCount,
				totalPrice: totalPriceAllItems,
			};
		default:
			return state;
	}
};

// action creators
export const addToCartAC = objPizza => ({
	type: ADD_TO_CART,
	payload: objPizza,
});
