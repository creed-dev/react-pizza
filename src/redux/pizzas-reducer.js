// action types
const SET_PIZZAS = 'pizzas-reducer/SET_PIZZAS';

// initial state
const initialState = {
	pizzas: [],
};

// reducer
export const pizzasReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PIZZAS:
			return {
				...state,
				pizzas: action.pizzas,
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
