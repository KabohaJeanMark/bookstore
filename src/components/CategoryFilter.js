import PropTypes from 'prop-types';
import Select from 'react-select';

const CategoryFilter = ({ handleFilterChange }) => {
  const options = [
    { value: 'All', label: 'All' },
    { value: 'Action', label: 'Action' },
    { value: 'Biography', label: 'Biography' },
    { value: 'History', label: 'History' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Learning', label: 'Learning' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
  ];

  return (
    <Select className="categoriesDropDown" options={options} onChange={(e) => handleFilterChange(e)} />
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
