/* eslint import/no-cycle: [2, { ignoreExternal: true }] */

import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Dracula',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Romeo and Juliet',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Last Samurai',
      category: 'History',
    },
  ],
  filter: 'All',
};

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
