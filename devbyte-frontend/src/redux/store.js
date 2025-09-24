import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

// Create the Redux store and register reducers
const store = configureStore({
  reducer: {
    // 'theme' slice manages theme state (light/dark mode)
    theme: themeReducer,
  },
});

export default store;
