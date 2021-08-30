// action types
const SET_CATEGORIE = 'categories-reducer/SET_CATEGORIE';
const SET_SORT = 'categories-reducer/SET_SORT';

// initial state
const initialState = {
	category: null,
	sortBy: 'rating',
	order: 'desc',
};

// reducer
export const filters = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORIE:
			return {
				...state,
				category: action.payload,
			};
		case SET_SORT:
			return {
				...state,
				sortBy: action.sortBy,
				order: action.order,
			};
		default:
			return state;
	}
};

// action creators
export const setCategoryAC = payload => ({
	type: SET_CATEGORIE,
	payload,
});

export const setSortByAC = (sortBy, order) => ({
	type: SET_SORT,
	sortBy,
	order,
});
