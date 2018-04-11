import { createStore, compose, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './rootReducer';

const store = createStore(
    combineReducers, 
    compose(
        applyMiddleware(thunk),
        ((typeof window === 'object') && (typeof window.devToolsExtension !== 'undefined')) ? window.devToolsExtension() : f =>f));
export default store;
