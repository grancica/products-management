import React from "react";

import ProductItem from "./ProductItem";

import classes from "./ProductList.module.css";
//import classes from './MoviesList.module.css';

const ProductList = (props) => {
  return (
    //<ul className={classes["product-list"]}>
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </ul>
  );
};

export default ProductList;
