import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <div className="lesson-panel">
      <div className="book-info">
        <p className="category opacity-50 font-mont font-bold md:text-sm capitalize">
          {category}
          {' '}
        </p>
        <p className="title">
          {title}
        </p>
        <p className="id text-link font-robo font-light md:text-sm mb-4">
          Author:
          {' '}
          PenName
        </p>
        <div className="button-grp d-flex align-items-center">
          <span className="comments">Comment</span>
          <button className="remove btn btn" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="progress-info ">
        <div className="circular">
          <div className="inner" />
          <div className="circle">
            <div className="bar left">
              <div className="progress" />
            </div>
            <div className="bar right">
              <div className="progress" />
            </div>
          </div>
        </div>
        <div className="count">
          <p className="percent">88%</p>
          <p className="completed"> completed</p>
        </div>
      </div>
      <div className="chapter-info">
        <p className="para-1">CURRENT CHAPTER</p>
        <p className="para-2">
          {' '}
          {id}
        </p>
        <button className=" update-btn btn btn-primary btn-lg" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
