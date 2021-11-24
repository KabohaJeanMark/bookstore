import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="submit" onClick={handleRemoveBook}>x</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: PropTypes.shape({
    bookId: '98',
    title: 'Atila the Hun',
    category: 'History',
  }),
};

export default Book;
