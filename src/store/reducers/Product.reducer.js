import axios from "axios";

const OPENPRODUCT = "OPENPRODUCT";

export const getProduct = () => {
  return function (dispatch) {
    axios.get("https://fakestoreapi.com/products?limit=9").then((res) => {
      dispatch({ type: OPENPRODUCT, payload: res.data });
    });
  };
};

const initialState = {
  product: [],
};

const productReducer = (state = initialState, action) => {
  if (action.type === OPENPRODUCT) {
    return {
      ...state,
      product: action.payload,
    };
  }
  return state;
};

export default productReducer;
