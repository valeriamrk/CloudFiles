import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filesAPI } from "../services/api/api";
import { transformDataGetAllFiles } from "./helpers/transformData";

export const createDir = createAsyncThunk("files/createdir", async (params, {rejectWithValue}) => {
  try {
    const response = await filesAPI.createDir(
      params.name,
      params.type,
      params.parent
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
});

export const getAllFiles = createAsyncThunk(
  "files/getAllFiles",
  async (params, {rejectWithValue}) => {
    try {
      const response = await filesAPI.getAllFiles();
      const transformedData = transformDataGetAllFiles(response.data);
      return transformedData;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const deleteFolder = createAsyncThunk(
  "files/deleteFolder",
  async (params, {rejectWithValue}) => {
    try {
      const response = await filesAPI.deleteFolder(); // параметры
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

export const renameFolder = createAsyncThunk(
  "files/renameFolder",
  async (params, {rejectWithValue}) => {
    try {
      const response = await filesAPI.renameFolder(); // параметры
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const initialState = {
  files: [],
  currentDir: null,
};

export const filesReducerSlice = createSlice({
  name: "filesReducer",
  initialState,
  reducers: {
    // setFiles: (state, action) => {
    //   state.files.push(action.payload);
    // },
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
    checkOneFile: (state, action) => {
      state.files.map((element) => {
        if (element.id === action.payload.id) {
          element.checked = !action.payload.checked;
        }
        return element;
      });
    },
    uncheckAllFiles: (state) => {
      state.files.map((element) => {
        element.checked = false;
        return element;
      });
    },
  },
  extraReducers: {
    [createDir.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
    [createDir.rejected]: setError,

    [getAllFiles.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
    [getAllFiles.rejected]: setError,

    [deleteFolder.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
    [deleteFolder.rejected]: setError,

    [renameFolder.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
    [renameFolder.rejected]: setError,
  },
});

// Action creators are generated for each case reducer function
export const { setFiles, setCurrentDir, checkOneFile, uncheckAllFiles } =
filesReducerSlice.actions;

export default filesReducerSlice.reducer;
