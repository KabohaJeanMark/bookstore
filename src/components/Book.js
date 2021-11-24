import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { id, title, category } = book;
  return (
    <tr key={id}>
      <td>{id || Math.floor(Math.random() * 100)}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape.isRequired,
};

export default Book;
