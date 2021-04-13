import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import user from './userReducer';

import  { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));