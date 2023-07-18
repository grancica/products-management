//import logo from './logo.svg';
//import './App.css';

import React, { useState, useEffect, useCallback } from "react";

//import ProductList from "./components/ProductList";
import ProductItem from "./components/ProductItem";
import LoadMore from "./components/LoadMore";
import "./App.css";
import "./components/LoadMore.css";
import "./components/ProductList.module.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const fetchedProducts = data.products.map((productData) => {
        return {
          id: productData.id,
          title: productData.title,
          price: productData.price,
          image: productData.image,
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
          title={product.title}
          price={product.price}
          image={product.image}
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
    <React.Fragment>
      {/* <section>
        <button onClick={fetchProductsHandler}>Fetch Products</button>
      </section> */}
      <div className="App">
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
    </React.Fragment>
  );
}

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
//}

//export default App;
