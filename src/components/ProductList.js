import React from "react";

import ProductItem from "./ProductItem";

import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
        />
      ))}
    </ul>
  );
};

export default ProductList;
