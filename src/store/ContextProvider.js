import ProductContext from "./context";
import { useContext, useReducer } from "react";

const productReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [action.item, ...state.items];
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems = state.items.filter((item) => item.id !== action.id);
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "EDIT") {
    let updatedItems = state.items.map(
      (product) => product.id === action.item.id
    );
    if (updatedItems) {
      return action.item;
    } else {
      return product;
    }
  }

  return state;
};

const ProductProvider = (props) => {
  const productCtx = useContext(ProductContext);

  const defaultProductState = {
    items: productCtx.items,
  };
  const [productState, dispatchProductAction] = useReducer(
    productReducer,
    defaultProductState
  );

  const addProductHandler = (item) => {
    dispatchProductAction({ type: "ADD", item: item });
  };

  const removeProductHandler = (id) => {
    dispatchProductAction({ type: "REMOVE", id: id });
  };

  const editProductHandler = (product) => {
    dispatchProductAction({ type: "EDIT", item: product });
  };

  const productContext = {
    items: productState.items,
    addItem: addProductHandler,
    removeItem: removeProductHandler,
    editItem: editProductHandler,
  };

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
