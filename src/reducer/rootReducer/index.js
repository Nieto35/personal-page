import { combineReducers } from "redux";
// import { userReducer } from "@reducer/user";
import dataReducer from "@slices/dataSlice";
import { loadingReducer } from "@reducer/loading";

const rootReducer = combineReducers({
  data: dataReducer,
  // loading: loadingReducer,
});

export default rootReducer;
