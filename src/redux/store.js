import { configureStore } from "@reduxjs/toolkit";
import savedFilmsReducer from "./savedFilmsSlice";

const store = configureStore({
  reducer: {
    savedFilms: savedFilmsReducer,
  },
});

export default store;
