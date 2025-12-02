import { createSlice } from "@reduxjs/toolkit";

//  Get the saved theme mode from localStorage (if it exists)
const storedTheme = localStorage.getItem("mode");

//  Initial state for the slice
const initialState = {
  // If we have a theme saved in localStorage, use it.
  // Otherwise, default to "light".
  mode: storedTheme ? storedTheme : "light",
};

//  Create a slice for theme state management
const themeSlice = createSlice({
  name: "theme", // The name of this slice (used in Redux store)
  initialState,
  reducers: {
    // Toggle between light and dark mode
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      // Save the new mode to localStorage so it's remembered on refresh
      localStorage.setItem("mode", state.mode);
    },

    // Set theme explicitly (e.g. user picks a mode from a dropdown)
    setTheme: (state, action) => {
      state.mode = action.payload;
      // Save it in localStorage
      localStorage.setItem("mode", state.mode);
    },
  },
});

// Export the actions so components can dispatch them
export const { toggleTheme, setTheme } = themeSlice.actions;

// Export the reducer to be included in the store
export default themeSlice.reducer;
