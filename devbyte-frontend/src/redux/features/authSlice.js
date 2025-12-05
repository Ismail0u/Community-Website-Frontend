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

/**
 * Async thunk for forgot password - sends reset link
 */
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      console.log(email);
      const res = await api.post("/v1/auth/forgot-password", { email });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/**
 * Async thunk for reset password with token
 */
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/v1/auth/reset-password", { 
        token, 
        password 
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/**
 * Async thunk for OTP verification
 */
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const res = await api.post("/v1/auth/verify-otp", { email, otp });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial authentication state
const initialState = {
  user: null,
  loading: false,
  error: null,
  successMessage: null,
  isOtpVerified: false,
  resetToken: null,
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
    // FORGOT PASSWORD
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.payload?.message || "Reset link sent successfully";
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // VERIFY OTP
    builder.addCase(verifyOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(verifyOtp.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.payload?.message || "OTP verified successfully";
      state.isOtpVerified = true;
      state.resetToken = action.payload?.token; // Store token for password reset
    });
    builder.addCase(verifyOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // RESET PASSWORD
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.payload?.message || "Password reset successfully";
      state.isOtpVerified = false;
      state.resetToken = null;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
