import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import users from "../features/users/usersSlice";
import cards from "../features/cards/cardsSlice";
import utils, { setConfirmationResult } from "../features/utils/utilsSlice";

export const store = configureStore({
  reducer: {
    users,
    cards,
    utils,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [setConfirmationResult.type],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
