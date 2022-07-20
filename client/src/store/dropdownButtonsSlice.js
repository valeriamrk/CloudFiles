import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const initialState = {
  viewButtonsData: [
    { id: uuidv4(), value: "List", checked: false },
    { id: uuidv4(), value: "Tiles", checked: true },
  ],
  sortButtonsData: [
    { id: uuidv4(), value: "A - Z", checked: true, direction: "ascending" },
    { id: uuidv4(), value: "Z - A", checked: false, direction: "descending" },
  ],
  newFileButtonsData: [
    { id: uuidv4(), value: "Folder" },
    { id: uuidv4(), value: "TXT file" },
  ],
  uploadFileButtonsData: [
    { id: uuidv4(), value: "File"},
    { id: uuidv4(), value: "Folder"},
  ],
  modifiedButtonsData: [
    { id: uuidv4(), value: "Older to newer" },
    { id: uuidv4(), value: "Newer to older" },
  ],
  sizeButtonsData: [
    { id: uuidv4(), value: "Smaller to larger" },
    { id: uuidv4(), value: "Larger to smaller" },
  ],
}

export const dropdownButtonsSlice = createSlice({
  name: "dropdownButtonsData",
  initialState,
  reducers: {
    changeViewCheck: (state, action) => {
      state.viewButtonsData.map((element) => {
        if (element.id === action.payload) {
          element.checked = true;
        } 

        else if (element.id !== action.payload) {
          element.checked = false;
        }
        return element;
      });
    },

    sortCheck: (state, action) => {
      state.sortButtonsData.map((element) => {
        if (element.id === action.payload) {
          element.checked = true;
        } 

        else if (element.id !== action.payload) {
          element.checked = false;
        }
        return element;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeViewCheck, sortCheck } = dropdownButtonsSlice.actions;

export default dropdownButtonsSlice.reducer;