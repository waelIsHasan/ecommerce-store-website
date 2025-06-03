// src/components/ProductList.jsx
import Skeleton from '@mui/material/Skeleton';

import { useState } from "react";
import {useProductsInPage , useProductsByCategoryInPage} from '../../hooks/useProducts.js';
import Card from "../Card/Card";
import "./ProductList.css";
function ProductList({categories}) {
  const [page, setPage] = useState(1);
  const { data: products ,isLoading, isError, error } = useProductsByCategoryInPage(categories,page);

  if (isLoading) {
      return (
    <div className={"product-page"} >
      <h2>Products</h2>

      <div className='product-list'>
        {[...Array(8)].map((_, i) => (
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
        {
          <ul className="product-list">
            {products &&
              products["data"]?.map((product) => (
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
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
