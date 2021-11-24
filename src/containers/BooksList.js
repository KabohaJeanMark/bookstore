import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (<Book key={book.id} book={book} />))}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf,
};

BooksList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps)(BooksList);
