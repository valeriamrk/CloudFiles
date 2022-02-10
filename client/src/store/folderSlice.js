import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filesAPI } from "../services/api/api";

export const fetchFolders = createAsyncThunk(
  "files/createdir",
  async (params) => {
    try {
      const response = await filesAPI.createDir(
        params.name,
        params.type,
        params.parent
      );
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

export const deleteFolder = createAsyncThunk(
  "files/deleteFolder",
  async (params) => {
    try {
      const response = await filesAPI.deleteFolder(); // параметры
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const renameFolder = createAsyncThunk(
  "files/renameFolder",
  async (params) => {
    try {
      const response = await filesAPI.renameFolder(); // параметры
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
  testData: null,
  currentDir: null,
};

export const testReducer = createSlice({
  name: "testReducerName",
  initialState,
  reducers: {
    setFolders: (state, action) => {
      state.folders.push(action.payload);
    },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
    checkOneFile: (state, action) => {
      state.allFolders.map((element) => {
        if (element.id === action.payload.id) {
          element.checked = !action.payload.checked;
        }
        return element;
      });
    },
    uncheckAllFiles: (state) => {
      state.allFolders.map((element) => {
        element.checked = false;
        return element;
      });
    },
  },
  extraReducers: {
    [fetchFolders.fulfilled]: (state, action) => {
      state.folders = action.payload;
    },
    [fetchFolders.rejected]: setError,

    [deleteFolder.fulfilled]: (state, action) => {
      state.folders = action.payload;
    },
    [deleteFolder.rejected]: setError,

    [renameFolder.fulfilled]: (state, action) => {
      state.folders = action.payload;
    },
    [renameFolder.rejected]: setError,

  },
});

// Action creators are generated for each case reducer function
export const { setFolders, setCurrentDir, checkOneFile, uncheckAllFiles } =
testReducer.actions;

export default testReducer.reducer;