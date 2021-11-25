import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import store from '../reducers';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, filter }) => {
  const handleRemoveBook = (book) => {
    store.dispatch(removeBook(book));
  };

  const handleFilterChange = (e) => {
    store.dispatch(changeFilter(e.value));
  };

  const displayedBooks = filter === 'All' ? books : books.filter((book) => book.category === filter);

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
          {displayedBooks.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={() => { handleRemoveBook(book); }} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(BooksList);
