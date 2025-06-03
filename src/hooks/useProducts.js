// src/hooks/useProducts.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductById,
  createProduct,
  fetchProductsInPage,
  fetchProductsByCategoriesInPage,
  searchForProductsByTest
} from "../services/Product";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
export const useProductsInPage = (page)=>{
  return useQuery(
    {
      queryKey : ["productsInPage" , page],
      queryFn : () => fetchProductsInPage(page),
       keepPreviousData: true,
       
    }
  )
}

export const useProductsByCategoryInPage = (categories,page)=>{
  return useQuery(
    {
      queryKey : ["products" , page,categories],
      queryFn : ()=>fetchProductsByCategoriesInPage(categories , page),
      keepPreviousData : true,
    }
  )

}
export const useSearchField = (debouncedInput)=>{
  return useQuery({
    queryKey: ['search-suggestions', debouncedInput],
    queryFn: () => searchForProductsByTest(debouncedInput),
    enabled: !!debouncedInput,
  });

}

export const useProduct = (productId) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId, // Only fetch if productId exists
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // Invalidate the products query to refetch the updated list
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Error creating product:", error);
    },
  });
};
