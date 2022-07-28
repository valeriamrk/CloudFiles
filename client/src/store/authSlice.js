import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../dbConnect";

export const userLogin = createAsyncThunk(
  "user/login",
  async (params) => {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, params.email, params.password);
      return user;
  }
);

export const userRegister = createAsyncThunk(
  "user/register",
  async (params, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, params.email, params.password);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userFetch = createAsyncThunk(
  "user/fetch",
  async (params) => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          localStorage.setItem("isAuthenticated", true);
        } else {
          localStorage.removeItem("isAuthenticated");
        }
      });
  }

);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const initialState = {
  email: null,
  token: null,
  id: null,
  user: null,
  userAsync: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    logout: (state, action) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      state.userAsync = action.payload
    },
    // [userLogin.rejected]: setError,
    // [userLogin.rejected]: setError,

    [userRegister.fulfilled]: (state, action) => {
      state.userAsync = action.payload
    },
    [userRegister.rejected]: setError,
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
