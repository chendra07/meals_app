import { configureStore } from "@reduxjs/toolkit";

import { favorites_reducer } from "./slices";

export const store = configureStore({
  reducer: {
    favoriteMeals: favorites_reducer,
  },
});
