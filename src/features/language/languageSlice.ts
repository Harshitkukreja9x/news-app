import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const savedLang = localStorage.getItem("lang") || "en";

const languageSlice = createSlice({
  name: "language",

  initialState: {
    lang: savedLang,
  },

  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;

      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;