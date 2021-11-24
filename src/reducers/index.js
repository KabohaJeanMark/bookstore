/* eslint import/no-cycle: [2, { ignoreExternal: true }] */

import { combineReducers, createStore } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({ booksReducer });

const store = createStore(rootReducer);

export default store;
