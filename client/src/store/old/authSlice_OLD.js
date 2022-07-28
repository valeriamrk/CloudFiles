import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../services/api/api";

export const registrationAsync = createAsyncThunk(
  "auth/registration",
  async (params, {rejectWithValue}) => {
    try {
      const response = await usersAPI.registration(
        params.email,
        params.password
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const loginAsync = createAsyncThunk("auth/login", async (params, {rejectWithValue}) => {
  try {
    const response = await usersAPI.login(params.email, params.password);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
});
export const authAsync = createAsyncThunk("auth/auth", async ({ rejectWithValue }) => {
  try {
    const response = await usersAPI.auth();
    localStorage.setItem("token");
    return response.data.user;
  } catch (error) {
    localStorage.removeItem('token');
    return rejectWithValue(error.response.data)
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

export const authReducerSlice = createSlice({
  name: "authReducer",
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
      state.loader = true;
    },
    [authAsync.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
      state.loader = false;
    },
    [authAsync.rejected] : (state, action) => {
      state.isAuth = false;
      state.loader = false;
      state.status = "rejected";
      state.error = action.payload;
    }
  },
});

export const { logout } = authReducerSlice.actions;

export default authReducerSlice.reducer;
