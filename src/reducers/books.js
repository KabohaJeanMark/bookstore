import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

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
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book !== action.payload),
      };
    default: return state;
  }
};

export default booksReducer;
