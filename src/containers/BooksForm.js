import { useState } from 'react';
import { createBook } from '../actions';
import store from '../reducers';

const BooksForm = () => {
  const [bookState, setBookState] = useState({
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookState({
      ...bookState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(createBook(bookState));
    setBookState({
      title: '',
      category: '',
    });
  };

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" name="title" placeholder="Book title" value={bookState.title} onChange={handleChange} />
      <select name="category" value={bookState.category} onChange={handleChange}>
        {categories.map((category, index) => <option key={index.id}>{category}</option>)}
      </select>
      <button type="submit" onClick={handleSubmit}>Create book</button>
    </form>
  );
};

export default BooksForm;
