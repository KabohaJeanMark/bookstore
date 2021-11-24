import { combineReducers, createStore } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({ booksReducer });

const store = createStore(rootReducer);

export default store;
