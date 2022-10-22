import { SET_USER } from "@actions/types";
import { SET_LOADING } from "@actions/types";

const initialState = {
  data: {},
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
