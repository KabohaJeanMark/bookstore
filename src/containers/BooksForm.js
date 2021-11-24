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
    <form>
      <input type="text" id="title" placeholder="title" value={bookState.title} onChange={(e) => handleTitleChange(e)} />
      <Select options={options} onChange={(e) => handleCategoryChange(e)} />
      <button type="submit" onClick={handleSubmit}>Create book</button>
    </form>
  );
};

export default BooksForm;
