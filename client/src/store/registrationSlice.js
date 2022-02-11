import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../services/api/api";

export const registration = createAsyncThunk(
  "files/registration",
  async (params) => {
    try {
      const response = await usersAPI.registration(
        params.email, 
        params.password
      );
      alert(response.data.message);
    } catch (error) {
      return error;
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const initialState = {
  state: []
};

export const registrationReducer = createSlice({
  name: "registrationReducer",
  initialState,
  reducers: {
  },
  extraReducers: {
    [registration.fulfilled]: (state, action) => {
      state = action.payload;
    },
    [registration.rejected]: setError,
  },
});

export const { } =
registrationReducer.actions;

export default registrationReducer.reducer;