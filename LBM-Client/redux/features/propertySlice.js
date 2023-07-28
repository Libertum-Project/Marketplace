import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const propertyURL = "http://localhost:7689/properties";

const initialState = {
  filters: {
    financeType: "",
    rentalYield: "",
    location: "",
  },
  filteredProperties: [],
  search: "",
  notFound: false,
  status: "idle",
  error: undefined,
};

export const createProperty = createAsyncThunk(
  "property/createProperty",
  async (property) => {
    const response = await fetch(propertyURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    return await response.json();
  }
);

export const fetchFilteredProperties = createAsyncThunk(
  "filter/fetchFilteredProperties",
  async (filters) => {
    console.log(filters)
    const newUrl = `${propertyURL}/filter?${filters}`;
    const response = await fetch(newUrl);
    return await response.json();
  }
);

export const fetchAllProperties = createAsyncThunk(
  "property/fetchAllProperties",
  async () => {
    const response = await fetch(propertyURL);
    return await response.json();
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.filteredProperties = [];
    },
  },
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
      .addCase(createProperty.pending, commonPendingAction)
      .addCase(createProperty.fulfilled, commonFulfilledAction)
      .addCase(createProperty.rejected, commonRejectedAction)

      .addCase(fetchFilteredProperties.pending, commonPendingAction)
      .addCase(fetchFilteredProperties.rejected, commonRejectedAction)
      .addCase(fetchFilteredProperties.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.filteredProperties = action.payload;
        console.log(action.payload)
      });
  },
});

export default propertySlice.reducer;
