import { SET_USER } from "@actions/types";
import { SET_LOADING } from "@actions/types";

export const setDataUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
