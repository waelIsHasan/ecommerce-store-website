// src/components/ProductList.jsx
import Skeleton from '@mui/material/Skeleton';

import { useState } from "react";
import { useProductsInPage } from "../../hooks/useProducts";
import Card from "../Card/Card";
import "./ProductList.css";
function ProductList() {
  const [page, setPage] = useState(1);

  const { data: products ,meta ,isLoading, isError, error } = useProductsInPage(page);

  if (isLoading) {
      return (
    <div className={"product-page"} >
      <h2>Products</h2>

      <div className='product-list'>
        {[...Array(10)].map((_, i) => (
             <div  style={{ margin : "10px" ,height : "400px" , width : "300px"}}>
                <Skeleton sx={{ bgcolor: 'grey.600', height: '100%',width : '100%'}} />
             </div>

            ))}
    </div>
    </div>);
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="product-page">
      <h2>Products</h2>
      <div className="product-list">
        <h1>{console.log(meta)}</h1>
        {
          <ul className="product-list">
            {products &&
              products["data"].map((product) => (
                <li key={product.id} className="product-item">
                  <Card product={product} />
                </li>
              ))}
          </ul>
        }
      </div>
      <div className="pagination-buttons">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page: {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          // Assume API returns `hasNextPage`
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
