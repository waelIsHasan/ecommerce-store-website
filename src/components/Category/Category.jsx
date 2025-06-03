import React, { useState } from 'react';
import './Category.css';
import ProductList from '../ProductList/ProductList';
const CategoryFilter = ({ categories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className='filter-products'>

    <div className="category-filter">
      <h3>Filter by Category</h3>
      <div className="filter-options">
        {categories && categories.map((category) => (
          <label key={category} className="filter-option">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
    <ProductList categories={selectedCategories}/>
     </div>

  );
};

export default CategoryFilter;
