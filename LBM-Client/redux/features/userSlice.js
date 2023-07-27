import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userURL = "http://localhost:7689/user";

const initialState = {
  currentUser: {},
  allUsers: [],
  status: "idle",
  error: undefined,
};

export const fetchCurrentUser = createAsyncThunk(
  "fetch/fetchCurrentUser",
  async (userData) => {
    const response = await fetch(userURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  }
);

export const fetchAllUsers = createAsyncThunk(
  "fetch/fetchAllUsers",
  async () => {
    const response = await fetch(userURL);
    return await response.json();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const commonPendingAction = (state) => {
      state.status = "loading";
    };
    const commonFulfilledAction = (state, action) => {
      state.status = "succeeded";
    };
    const commonRejectedAction = (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    };
    builder

      .addCase(fetchAllUsers.pending, commonPendingAction)
      .addCase(fetchAllUsers.rejected, commonRejectedAction)
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.allUsers = action.payload;
      })

      .addCase(fetchCurrentUser.pending, commonPendingAction)
      .addCase(fetchCurrentUser.rejected, commonRejectedAction)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.currentUser = action.payload;
      });
  },
});

export const selectCurrentUser = (state) => state.user.currentUser;

export default userSlice.reducer;
