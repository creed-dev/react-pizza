import { applyMiddleware, combineReducers, createStore } from 'redux';
import { pizzas } from './pizzas-reducer';
import { filters } from './filters-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cart } from './cart-reducer';

const rootReducer = combineReducers({
	pizzas,
	filters,
	cart,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

let store = createStore(rootReducer, composedEnhancer);

export default store;
