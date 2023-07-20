import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

import useHttp from "../store/use-http";
import { getSingleProduct } from "../store/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductDetails = () => {
  const params = useParams();

  const {
    sendRequest,
    status,
    data: loadedProduct,
    error,
  } = useHttp(getSingleProduct, true);
  const { id } = params;

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedProduct.title) {
    return <p>No product found.</p>;
  }

  //const productFetched = props.fetchedProducts.find((id) => id === params.id);

  //   if (!productFetched) {
  //     return <p>No product found!</p>;
  //   }

  return (
    <div>
      <figure className={classes["product-details"]}>
        <p>{loadedProduct.title}</p>
        <p>{loadedProduct.description}</p>
        <p>{loadedProduct.price}</p>
        <p>{loadedProduct.discountPercentage}</p>
        <p>{loadedProduct.rating}</p>
        <p>{loadedProduct.stock}</p>
        <p>{loadedProduct.brand}</p>
        <p>{loadedProduct.category}</p>
        <p>{loadedProduct.thumbnail}</p>
        <p>{loadedProduct.images}</p>
        {/* <p>{productFetched.text}</p>
        <figcaption>{productFetched.author}</figcaption> */}
      </figure>
    </div>
  );
};

export default ProductDetails;
