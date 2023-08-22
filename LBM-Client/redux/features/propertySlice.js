import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const serverURL = import.meta.env.VITE_SERVER_URL;
//const serverURL = import.meta.env.VITE_TEST_SERVER;
const propertyURL = `${serverURL}properties`;

const initialState = {
  filters: {
    financeType: "",
    rentalYield: "",
    location: "",
  },
  filteredProperties: [],
  allProperies: [],
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

export const setPropertyStatus = createAsyncThunk(
  "property/setPropertyStatus",
  async ({ propertyId, isActive }) => {
    const body = { propertyId, isActive };
    const response = await fetch(`${propertyURL}/status`, {    
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
);

export const claimMonthlyPayment = createAsyncThunk(
  "property/claimMonthlyPayment",
  async ({ propertyAddress, quantity, propertyType }) => {
    const body = { propertyAddress, quantity, propertyType };
    const response = await fetch(`${propertyURL}/claim`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
);

export const withdrawFunds = createAsyncThunk(
  "property/withdrawFunds",
  async ({ propertyAddress, userAddress, propertyType }) => {
    const body = { propertyAddress, userAddress, propertyType };
    const response = await fetch(`${propertyURL}/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
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
      })

      .addCase(fetchAllProperties.pending, commonPendingAction)
      .addCase(fetchAllProperties.rejected, commonRejectedAction)
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.allProperies = action.payload;
      });
  },
});

export default propertySlice.reducer;
