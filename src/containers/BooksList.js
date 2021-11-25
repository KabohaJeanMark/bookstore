import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import store from '../reducers';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books }) => {
  const handleRemoveBook = (book) => {
    store.dispatch(removeBook(book));
  };

  const handleFilterChange = (e) => {
    store.dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={() => { handleRemoveBook(book); }} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object.isRequired),
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps)(BooksList);
