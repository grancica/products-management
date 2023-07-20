import { createContext } from "react";

const ProductContext = createContext({
  //items: DUMMY_DATA,
  addItem: (item) => {},
  removeItem: (id) => {},
  editItem: (product) => {},
});

export default ProductContext;
