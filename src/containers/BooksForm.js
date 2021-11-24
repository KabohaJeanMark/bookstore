import { useState } from 'react';

const BooksForm = () => {
  const [bookState, setBookState] = useState({
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      title: e.target.value,
    });
  };

  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" placeholder="Book title" value={bookState.title} onChange={handleChange} />
      <select>
        {categories.map((category, index) => <option key={index.id}>{category}</option>)}
      </select>
      <button type="submit">Create book</button>
    </form>
  );
};

export default BooksForm;
