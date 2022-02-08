import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filesAPI } from "../services/api/api";

export const fetchFolders = createAsyncThunk(
  "files/createdir",
  async (params) => {
    try {
      const response = await filesAPI.createDir(params.name, params.type, params.parent);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchAllFoldersFromBackend = createAsyncThunk(
  "files/fetchAllFoldersFromBackend",
  async (params) => {
    try {
      const response = await filesAPI.fetchAllFoldersFromBackend(); // параметры
      return response.data;
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
  folders: [],
  currentDir: null,
};

export const foldersCreateSlice = createSlice({
  name: "foldersCreate",
  initialState,
  reducers: {
    setFolders: (state, action) => {
      state.folders.push(action.payload);
    },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
  },
  extraReducers: {
    [fetchFolders.fulfilled]: (state, action) => {
      state.folders = action.payload;
    },
    [fetchFolders.rejected]: setError,
  },
});

// Action creators are generated for each case reducer function
export const { setFolders, setCurrentDir } = foldersCreateSlice.actions;

export default foldersCreateSlice.reducer;
