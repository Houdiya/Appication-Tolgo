import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: null,
  },
  reducers: {
    getUserSuccess: (state, action) => {
      state.user = action.payload;
    },
    updateUserSuccess: (state, action) => {},
  },
});

export const getUser = () => async () => {};

export const updateUser = () => async () => {};

export default usersSlice.reducer;
