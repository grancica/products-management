import React from "react";

import classes from "./ProductList.module.css";

//import classes from './Movie.module.css';

const ProductItem = (props) => {
  return (
    //<li className={classes["product-item"]}>
    <li className={classes.item}>
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <p>{props.image}</p>
    </li>
  );
};

export default ProductItem;
