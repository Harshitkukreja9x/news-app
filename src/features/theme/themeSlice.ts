import { createSlice } from "@reduxjs/toolkit";

const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: savedMode ?? "light",
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;