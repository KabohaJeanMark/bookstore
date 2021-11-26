import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
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
    <div>
      <nav className="spacedClass">
        <div className="navText spacedClass">
          <h1 className="bookStoreCMS">Bookstore CMS</h1>
          <p className="bookHeading">BOOKS</p>
          <div className="bookCategories"><CategoryFilter handleFilterChange={handleFilterChange} /></div>
        </div>
        <div className="navIcon">
          <FaUser className="Mask" />
        </div>
      </nav>
      <div className="bookList">
        {displayedBooks.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={() => { handleRemoveBook(book); }} />
        ))}
      </div>
    </div>
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
