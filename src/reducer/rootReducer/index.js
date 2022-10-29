import { combineReducers } from "redux";
import dataReducer from "@slices/dataSlice";
import loadingSlice from "@slices/loadingSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  loading: loadingSlice,
});

export default rootReducer;
