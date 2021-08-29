import { applyMiddleware, combineReducers, createStore } from 'redux';
import { pizzasReducer } from './pizzas-reducer';
import { filtersReducer } from './filters-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cart-reducer';

const rootReducer = combineReducers({
	pizzas: pizzasReducer,
	filters: filtersReducer,
	cart: cartReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

let store = createStore(rootReducer, composedEnhancer);

export default store;
