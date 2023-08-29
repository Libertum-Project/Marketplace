import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export const { setConnected } = walletSlice.actions;

export const selectIsConnected = (state) => state.wallet.isConnected;

export default walletSlice.reducer;
