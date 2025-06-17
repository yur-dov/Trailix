import { configureStore } from "@reduxjs/toolkit";
import savedFilmsReducer from "./savedFilmsSlice";

// import { devToolsEnhancer } from "@redux-devtools/extension";
// console.log("Redux DevTools Enhancer:", devToolsEnhancer);

export const store = configureStore({
  reducer: {
    savedFilms: savedFilmsReducer,
  },
});
