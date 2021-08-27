import { combineReducers, createStore } from 'redux';
import { pizzasReducer } from './pizzas-reducer';

const rootReducer = combineReducers({
	pizzas: pizzasReducer,
});

let store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
