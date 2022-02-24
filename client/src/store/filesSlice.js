import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filesAPI } from "../services/api/api";
import { transformDataGetAllFiles, transformDataCreateDir } from "./helpers/transformData";

export const createDir = createAsyncThunk(
  "files/createdir",
  async (params, { rejectWithValue }) => {
    try {
      const response = await filesAPI.createDir(
        params.name,
        params.type,
        // params.parent,
        params.currentDir,

      );
      const transformedData = transformDataCreateDir(response.data);
      return transformedData;
      // return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllFiles = createAsyncThunk(
  "files/getAllFiles", 
  async (params, { rejectWithValue }) => {
    try {
      const response = await filesAPI.getAllFiles(
        params.currentDir
      );
      const transformedData = transformDataGetAllFiles(response.data);
      return transformedData;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadFile = createAsyncThunk(
  async (params, { rejectWithValue }) => {
    try {
      const response = await filesAPI.createDir(
        params.name,
        params.type,
        params.parent
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async (params, { rejectWithValue }) => {
    try {
      const response = await filesAPI.deleteFile(); // параметры
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const renameFolder = createAsyncThunk(
  "files/renameFolder",
  async (params, { rejectWithValue }) => {
    try {
      const response = await filesAPI.renameFolder(); // параметры
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
  dirStack: [],
  checkedToDelete: null,
};

export const filesReducerSlice = createSlice({
  name: "filesReducer",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      state.files.push(action.payload);
    },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload;
    },
    addFile: (state, action) => {
      state.files = action.payload;
    },
    pushToStack: (state, action) => {
      // state.dirStack = [...state.dirStack, action.payload];
      state.dirStack.push(action.payload);
    },
    popToStack: (state, action) => {
      // state.dirStack = [...state.dirStack, action.payload];
      state.dirStack.pop();
    },
    checkOneFile: (state, action) => {
      state.files.map((element) => {
        if (element.id === action.payload.id) {
          element.checked = !action.payload.checked;
        }
        return element;
      });
    },
    checkToDeleteFile: (state, action) => {
      state.checkedToDelete = action.payload.id 
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
      state.files = [...state.files, action.payload]
    },
    [createDir.rejected]: setError,

    [getAllFiles.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
    [getAllFiles.rejected]: setError,

    [deleteFile.fulfilled]: (state, action) => {
      state.files = [...state.files.filter(file => file._id !== action.payload)]
    },
    [deleteFile.rejected]: setError,

    [renameFolder.fulfilled]: (state, action) => {
      state.files = action.payload;
    },
    [renameFolder.rejected]: setError,
  },
});

// Action creators are generated for each case reducer function
export const { setFiles, setCurrentDir, pushToStack, popToStack, addFile, checkOneFile, checkToDeleteFile, uncheckAllFiles } =
  filesReducerSlice.actions;

export default filesReducerSlice.reducer;
