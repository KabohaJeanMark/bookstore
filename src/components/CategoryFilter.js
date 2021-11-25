const categories = ['All', 'Action', 'Romance', 'Mystery', 'History', 'Kids', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange }) => (
  <select onChange={handleFilterChange}>
    {categories.map((category) => (
      <option key={category} value={category}>{category}</option>
    ))}
  </select>
);

export default CategoryFilter;
