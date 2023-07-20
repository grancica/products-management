import React from "react";

import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";

//import classes from './Movie.module.css';

const ProductItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <h2>{props.title}</h2>{" "}
        </blockquote>
        <figcaption>
          <h3>{props.price}</h3>{" "}
        </figcaption>
        <p>{props.images}</p>
      </figure>
      <Link className={classes.btn} to={`/product/${props.id}`}>
        View Details
      </Link>
    </li>
  );
};

export default ProductItem;
