import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface UtilsState {
  confirmationResult: any;
  isWaiting: boolean;
  value: number;
  error: any;
}

const initialState: UtilsState = {
  confirmationResult: null,
  isWaiting: false,
  error: null,
  value: 0,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    startWaiting: (state) => {
      state.isWaiting = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isWaiting = false;
    },
    setConfirmationResult: (state, action: PayloadAction<any>) => {
      state.confirmationResult = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  startWaiting,
  hasError,
  setConfirmationResult,
  incrementByAmount,
} = utilsSlice.actions;

export const incrementAsync =
  (amount: number): AppThunk =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };

export const selectCount = (state: RootState) => state.utils.value;

export default utilsSlice.reducer;
