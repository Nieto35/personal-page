import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import avatar from "@images/avatar.png";

const initialState = {
  avatar: { avatar },
  apiName: "The Octocat",
  alias: "@Octocat",
  repository: "8",
  followers: "5241",
  following: "9",
  urlGit: "https://github.blog",
  location: "San francisco",
  twitter: "Not Available",
  work: "@Github",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.alias = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
console.log(dataSlice);
export default dataSlice.reducer;
