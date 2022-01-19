import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  currentDir: null
};

export const foldersCreateSlice = createSlice({
  name: "foldersCreate",
  initialState,
  reducers: {
    setFolders: (state, action) => {
      state.folders.push(action.payload)
  },
    setCurrentDir: (state, action) => {
      state.currentDir = action.payload
  },
}});

// Action creators are generated for each case reducer function
export const { setFolders, setCurrentDir } = foldersCreateSlice.actions;

export default foldersCreateSlice.reducer;
