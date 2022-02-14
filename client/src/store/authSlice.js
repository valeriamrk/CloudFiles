import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../services/api/api";

export const registrationAsync = createAsyncThunk(
  "auth/registration",
  async (params) => {
    try {
      const response = await usersAPI.registration(
        params.email,
        params.password
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const loginAsync = createAsyncThunk("auth/login", async (params) => {
  try {
    const response = await usersAPI.login(params.email, params.password);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    return error;
  }
});
export const authAsync = createAsyncThunk("auth/auth", async () => {
  try {
    const response = await usersAPI.auth();
    localStorage.removeItem("token");
    return response.data.user;
  } catch (error) {
    return error;
  }
});

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const initialState = {
  currentUser: {},
  isAuth: false,
  loader: false
};

export const authReducer = createSlice({
  name: "authReducerName",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.currentUser = {};
      localStorage.removeItem("token");
      state.isAuth = false;
    },
  },
  extraReducers: {
    [registrationAsync.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [registrationAsync.rejected]: setError,

    [loginAsync.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    [loginAsync.rejected]: setError,

    [authAsync.pending]: (state, action) => {
      state.currentUser = action.payload;
      state.loader = true;
    },
    [authAsync.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
      state.loader = false;
    },
    [authAsync.rejected]: setError,
  },
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
