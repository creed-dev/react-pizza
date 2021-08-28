import axios from 'axios';

// action types
const SET_PIZZAS = 'pizzas-reducer/SET_PIZZAS';
const SET_LOADED = 'pizzas-reducer/SET_LOADED';

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
		case SET_LOADED:
			return {
				...state,
				isLoaded: action.payload,
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

export const setLoadedAC = payload => ({
	type: SET_LOADED,
	payload,
});

// redux-thunks

export const fetchPizzas =
	(activeCategory, activeSort, activeOrder) => dispatch => {
		dispatch(setLoadedAC(false));
		axios
			.get(
				`http://localhost:3001/pizzas${
					activeCategory !== null
						? `?category=${activeCategory}&_sort=${activeSort}&_order=${activeOrder}`
						: `?_sort=${activeSort}&_order=${activeOrder}`
				}`
			)
			.then(({ data }) => {
				dispatch(setPizzasAC(data));
			});
	};
