import React, { useState, useEffect, useCallback } from "react";
// import { Routes, Route } from "react-router-dom";

//import ProductList from "./components/ProductList";
import ProductItem from "../components/ProductItem";
import LoadMore from "../components/LoadMore";
import "./AllProduct.module.css";
import "../components/LoadMore.css";
import "../components/ProductList.module.css";
// import AddProduct from "./pages/NewProductForm";
// import EditProduct from "./pages/EditProduct";
// import Layout from "./layout/Layout";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const fetchedProducts = data.products.map((productData) => {
        return {
          id: productData.id,
          title: productData.title,
          price: productData.price,
          images: productData.images,
        };
      });
      setProducts(fetchedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = <p>Found no movies.</p>;

  function LoadingSpinner() {
    return (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const number_item_pagination = 9;

  const { numberItemsPagination, loadMoreItems, loadMoreReset } = LoadMore(
    number_item_pagination
  );

  if (products.length > 0) {
    content = products
      .slice(0, numberItemsPagination)
      .map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
        />
      ));
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <div className="Product">
      <section>{content}</section>

      <button
        className={
          products.length > numberItemsPagination
            ? "load-more__button"
            : "load-more__button disabled"
        }
        onClick={() => loadMoreItems(products.length)}
      >
        Load More
      </button>
      <span
        className="load-more__reset"
        onClick={() => loadMoreReset(number_item_pagination)}
      >
        reset
      </span>
    </div>
  );
};

export default AllProduct;
