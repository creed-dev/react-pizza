import { applyMiddleware, combineReducers, createStore } from 'redux';
import { pizzasReducer } from './pizzas-reducer';
import { filtersReducer } from './filters-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
	pizzas: pizzasReducer,
	filters: filtersReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

let store = createStore(rootReducer, composedEnhancer);

export default store;
