import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewProductForm.module.css";

const NewProductForm = (props) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();
  const discountPercentageInputRef = useRef();
  const ratingInputRef = useRef();
  const stockInputRef = useRef();
  const brandInputRef = useRef();
  const categoryInputRef = useRef();
  const thumbnailInputRef = useRef();
  const imagesInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDiscountPercentage = discountPercentageInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredStock = stockInputRef.current.value;
    const enteredBrand = brandInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredThumbnail = thumbnailInputRef.current.value;
    const enteredImages = imagesInputRef.current.value;

    // optional: Could validate here

    props.onAddProduct({
      title: enteredTitle,
      description: enteredDescription,
      price: enteredPrice,
      discountPercentage: enteredDiscountPercentage,
      rating: enteredRating,
      stock: enteredStock,
      brand: enteredBrand,
      category: enteredCategory,
      thumbnail: enteredThumbnail,
      images: enteredImages,
    });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="discount-percentage">Discount Percentage</label>
          <input
            type="text"
            id="discount-percentage"
            ref={discountPercentageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="rating">Rating</label>
          <input type="text" id="rating" ref={ratingInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="stock">Stock</label>
          <input type="text" id="stock" ref={stockInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" ref={brandInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <input type="text" id="category" ref={categoryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="thumbnail">Thumbnail</label>
          <input type="text" id="thumbnail" ref={thumbnailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="images">Images</label>
          <input type="text" id="images" ref={imagesInputRef} />
        </div>

        <div className={classes.actions}>
          <button className="btn" type="submit">
            Add Product
          </button>
        </div>
        <div className={classes.actions}>
          <button className="btn">
            <Link to="/product">Go back</Link>
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewProductForm;
