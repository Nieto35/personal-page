import { combineReducers } from "redux";
// import { userReducer } from "@reducer/user";
import dataReducer from "@slices/dataSlice";
import loadingSlice from "@slices/loadingSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  loading: loadingSlice,
  // loading: loadingReducer,
});

export default rootReducer;
