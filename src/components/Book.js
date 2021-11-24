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
  book: PropTypes.shape.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
