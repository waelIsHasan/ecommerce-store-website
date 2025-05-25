import React, { useState } from 'react';
import './Category.css';
const CategoryFilter = ({ categories }) => {


  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      <div className="filter-options">
        {categories.map((category) => (
          <label key={category} className="filter-option">
            <input
              type="checkbox"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;