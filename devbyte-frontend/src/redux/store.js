import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import userReducer from "./features/userSlice";
import authReducer from "./features/authSlice";

// Create the Redux store and register reducers
const store = configureStore({
  reducer: {
    // 'theme' slice manages theme state (light/dark mode)
    theme: themeReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
