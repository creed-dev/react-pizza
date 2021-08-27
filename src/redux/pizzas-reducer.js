// action types
const SET_PIZZAS = 'pizzas-reducer/SET_PIZZAS';

// initial state
const initialState = {
	items: [],
	isLoaded: false,
};

// reducer
export const pizzasReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PIZZAS:
			return {
				...state,
				items: action.pizzas,
				isLoaded: true,
			};
		default:
			return state;
	}
};

// action creators
export const setPizzasAC = pizzas => ({
	type: SET_PIZZAS,
	pizzas,
});
