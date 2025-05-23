// src/services/productService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api'; // Replace with your API base URL

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products?populate=image`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};
export const fetchProductsInPage =async (page = 1)=>{
const response = await fetch(`${API_BASE_URL}/products?pagination[page]=${page}&pagination[pageSize]=10&populate=image`)
await new Promise(resolve => setTimeout(resolve, 2000));
if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
}


export const fetchProductById = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/products/${productId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with ID ${productId}`);
  }
  return response.json();
};

export const createProduct = async (productData) => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body: JSON.stringify(productData),
  });
  if (!response.ok) {
    throw new Error('Failed to create product');
  }
  return response.json();
};