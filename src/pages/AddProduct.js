import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../store/use-http";
import { addProduct } from "../store/api";

import NewProductForm from "./NewProductForm";
//import ProductContext from "../store/context";

const AddProduct = () => {
  const { sendRequest, status } = useHttp(addProduct);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/");
    }
  }, [status, navigate]);

  const addNewProductHandler = (productData) => {
    sendRequest(productData);
  };

  return (
    <NewProductForm
      isLoading={status === "pending"}
      onAddProduct={addNewProductHandler}
    />
  );
};

export default AddProduct;
