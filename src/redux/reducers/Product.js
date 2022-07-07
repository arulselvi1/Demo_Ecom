import {
  UPDATE_PRODUCT_DETAIL,
  UPDATE_PRODUCT_VARIANTS,
} from "../actionTypes/Product";

// INITIAL STATE
const initialState = {};

const productReducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case UPDATE_PRODUCT_DETAIL:
      return { ...state.product, ...payload };
    case UPDATE_PRODUCT_VARIANTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default productReducer;
