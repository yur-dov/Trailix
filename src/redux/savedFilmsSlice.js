import { createSlice } from "@reduxjs/toolkit";

const savedFilmsSlice = createSlice({
  name: "savedFilms",
  initialState: [],
  reducers: {
    addFilm: (state, action) => {
      const exists = state.find((film) => film.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFilm: (state, action) => {
      return state.filter((film) => film.id !== action.payload);
    },
  },
});
const toaddstring = "this is new string";
console.log(toaddstring);

export const { addFilm, removeFilm } = savedFilmsSlice.actions;
export default savedFilmsSlice.reducer;
