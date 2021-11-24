const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <input type="text" placeholder="Book title" />
      <select>
        {categories.map((category, index) => <option key={index.id}>{category}</option>)}
      </select>
      <button type="submit">Create book</button>
    </form>
  );
};

export default BooksForm;
