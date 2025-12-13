import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/lib/api";

// Async Thunk - fetch user profile.

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/v1/users/profile");
      console.log("User profile fetched:", data);
      return data.user;
    } catch (error) {
      console.error("Profile fetch error:", error.response?.data);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async Thunk - upload profile picture

export const uploadProfilePicture = createAsyncThunk(
  "user/uploadProfilePicture",
  async (file, { rejectWithValue }) => {
    try {
      // Create FormData to send the file
      const formData = new FormData();
      formData.append("profile_picture", file);

      const { data } = await api.patch("/v1/users/profile/picture", formData);
      console.log("profile data:", data);

      return data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to upload profile picture"
      );
    }
  }
);

// Async Thunk - update profile (fullname, email)

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const { data } = await api.patch("/v1/users/profile", profileData);
      return data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update profile"
      );
    }
  }
);
// delete profile thunk
export const deleteUserProfile = createAsyncThunk(
  "user/deleteProfile",
  async (_, { rejectWithValue }) => {
    try {
      await api.delete("/v1/users/account");
      return null;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete profile"
      );
    }
  }
);

// Async Thunk - change user password
export const changeUserPassword = createAsyncThunk(
  "user/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const { data } = await api.put("/v1/users/password", passwordData);
      return data.message || "Password changed successfully";
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to change password"
      );
    }
  }
);

// initialState of the slice
const initialState = {
  user: null,
  loading: false,
  error: null,
  notifications: true,
  profileVisibility: "public",
  profile_picture: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Clear user data (useful for logout)
    clearUserProfile: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
    },

    clearError: (state) => {
      state.error = null;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setProfileVisibility: (state, action) => {
      state.profileVisibility = action.payload;
    },
  },
  // EXTRA REDUCERS — Handle Async Lifecycle

  extraReducers: (builder) => {
    builder

      // When the request is pending (loading)
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //When the request is fulfilled (succeeds)
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // When the request fails (rejected)
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // When the request is fulfilled (succeeds)
      .addCase(uploadProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload) return;

        // payload IS the user object
        state.user.profile_picture = action.payload.profile_picture;
      })

      .addCase(uploadProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //UPDATE USER PROFILE
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload) return;
        console.log("update profile response:", action.payload);

        state.user = { ...state.user, ...action.payload };
      })

      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE PROFILE
      .addCase(deleteUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserProfile.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(deleteUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // CHANGE PASSWORD
      .addCase(changeUserPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUserPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        // Password changed successfully - no user data change needed
      })
      .addCase(changeUserPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearUserProfile,
  clearError,
  setNotifications,
  setProfileVisibility,
} = userSlice.actions;

export default userSlice.reducer;
