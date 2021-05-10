import {
	createStore as _createStore,
	compose,
	applyMiddleware,
	combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

function reduxDevToolsEnhancer() {
	if (process.env.NODE_ENV === 'development' && typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') {
		return window.__REDUX_DEVTOOLS_EXTENSION__();
	}
	return next => next;
}

export default function createStore() {
	const store = _createStore(
		reducers,
		void 0,
		compose(
			applyMiddleware(
				thunk
			),
			reduxDevToolsEnhancer(),
		),
	);

	return store;
}
