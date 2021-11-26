import { useState } from 'react';
import Select from 'react-select';
import { createBook } from '../actions';
import store from '../reducers';

const BooksForm = () => {
  const [bookState, setBookState] = useState({
    title: '',
    category: '',
  });

  const options = [
    { value: 'Action', label: 'Action' },
    { value: 'Biography', label: 'Biography' },
    { value: 'History', label: 'History' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Learning', label: 'Learning' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
  ];

  const handleTitleChange = (e) => {
    setBookState({ ...bookState, title: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setBookState({ ...bookState, category: e.value });
  };

  const bookId = Math.floor(Math.random() * 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(createBook({
      id: bookId,
      title: bookState.title,
      category: bookState.category,
    }));
    setBookState({
      title: '',
      category: '',
    });
  };

  return (
    <div className="bookList">
      <div className="addBookFormContainer">
        <h2> ADD NEW BOOK </h2>
        <form className="flexClass">
          <input className="bookTitle" type="text" id="title" placeholder="Book title" value={bookState.title} onChange={(e) => handleTitleChange(e)} />
          <Select className="addBookDropdown" placeholder="Category" options={options} onChange={(e) => handleCategoryChange(e)} />
          <button className="btn update-btn" type="submit" onClick={handleSubmit}>ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default BooksForm;
