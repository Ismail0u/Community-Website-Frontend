import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/lib/api";

/**
 * Async thunk for user signup.
 * Sends user registration data to the server and returns the response.
 */
export const signupUser = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post("/v1/auth/signup", userData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/**
 * Async thunk for user login.
 * Sends login credentials to the API and returns the authenticated user data.
 */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post("/v1/auth/signin", credentials);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/**
 * Async thunk for signing out the current user.
 * Clears the authenticated session on the server.
 */
export const signoutUser = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post(
        "/v1/auth/signout",
        {},
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Logout failed");
    }
  }
);

// Initial authentication state
const initialState = {
  user: null, // Stores logged-in user info
  loading: false, // Indicates async request status
  error: null, // Stores API or validation errors
  successMessage: false, // Shows whether the last action succeeded
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Reset all authentication-related state values.
     * Useful when navigating away from a page or clearing old messages.
     */
    resetAuthState: (state) => {
      state.loading = false;
      state.error = null;
      state.successMessage = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // SIGNUP
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = true;
      if (action.payload?.user) {
        state.user = action.payload.user;
      }
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // LOGIN
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = true;
      state.user = action.payload.user;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // --- LOGOUT ---
    builder.addCase(signoutUser.fulfilled, (state) => {
      state.user = null;
      state.loading = false;
      state.successMessage = false;
      state.error = null;
    });
    builder.addCase(signoutUser.rejected, (state) => {
      state.user = null;
      state.loading = false;
      state.successMessage = false;
      state.error = null;
    });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
