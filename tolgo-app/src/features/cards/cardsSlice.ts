import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [],
  },
  reducers: {},
});

export default cardsSlice.reducer;
