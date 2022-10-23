import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getGithubUsers from "@services/Users";
import { setLoading } from "@slices/loadingSlice";

const initialState = {
  data: {},
};

export const fetchDataWithDetails = createAsyncThunk(
  "data/fetchDataWithDetails",
  async (data, { dispatch }) => {
    dispatch(setLoading(true));
    const userRes = await getGithubUsers(data);
    if (userRes) {
      dispatch(setDataUser(userRes));
    } else {
      dispatch(setDataUser({ page: "page404" }));
    }
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDataUser } = dataSlice.actions;
export default dataSlice.reducer;
