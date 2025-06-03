import { useSearchParams } from "react-router-dom";
import { useSearchField } from "../../hooks/useProducts";
import Card from "../../components/Card/Card";
import "./SearchPage.css"; // Create this CSS file for styling

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useSearchField(searchQuery);

  // Extract product data if available
  const productList = products?.data || [];

  return (
    <div className="search-page">
      <h1 className="search-title">
        {searchQuery 
          ? `Search Results for: "${searchQuery}"` 
          : "Search Products"}
      </h1>

      {isLoading ? (
        <div className="loading">Loading products...</div>
      ) : isError ? (
        <div className="error">Error: {error.message}</div>
      ) : productList.length === 0 ? (
        <div className="no-results">
          No products found for "{searchQuery}"
        </div>
      ) : (
        <div className="product-grid">
          {productList.map((product) => (
            <Card 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
      )}
    </div>
  );
}