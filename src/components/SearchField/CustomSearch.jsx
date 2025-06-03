import "./CustomSearch.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchField } from "../../hooks/useProducts";
import Card from "../Card/Card";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
export default function CustomSearch() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const debouncedInput = useDebouncedValue(searchInput, 500);
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useSearchField(debouncedInput);

  function handelEventSearch(e) {
    setSearchInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchInput)}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="search">
        <input
          value={searchInput}
          onChange={handelEventSearch}
          type="search"
          placeholder="Search for products..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Search suggestions dropdown */}
      {searchInput && (
        <div className="suggestions-dropdown">
          {!isLoading && products?.length === 0 && (
            <div className="suggestion-item">No results found</div>
          )}
          {isLoading ? (
            <div className="suggestion-item">Loading...</div>
          ) : (
            <div className="product-list">
              {
                <ul className="product-list">
                  {products &&
                    products["data"]?.map((product) => (
                      <li key={product.id} className="product-item">
                        <Card product={product} isSmall={true} />
                      </li>
                    ))}
                </ul>
              }
            </div>
          )}
        </div>
      )}
    </div>
  );
}
