import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getGithubUsers from "@services/Users";

const initialState = {
  data: {},
};

export const fetchDataWithDetails = createAsyncThunk(
  "data/fetchDataWithDetails",
  async (data, { dispatch }) => {
    const userRes = await getGithubUsers(data);
    dispatch(setDataUser(userRes));
  }
);

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     const finalPayload = response.data
//     dispatch(someOtherAction())
//     return finalPayload; // will dispatch `fulfilled` action
//   }
// )

// export const getProducts = createAsyncThunk("getProducts", async (_, thunkAPI) => {
//   thunkAPI.dispatch(actionLoading());
//   const response = await axios.get("api");
//   return response;
// });

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
