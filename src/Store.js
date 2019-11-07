
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';

const initialState = {};

const middleware = [thunk];

export const history = createBrowserHistory();

const store = createStore(rootReducer(history), initialState, applyMiddleware(...middleware));

export default store;