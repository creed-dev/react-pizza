// action types
const SET_CATEGORIE = 'categories-reducer/SET_CATEGORIE';

// initial state
const initialState = {
	category: null,
};

// reducer
export const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CATEGORIE:
			return {
				...state,
				category: action.payload,
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
