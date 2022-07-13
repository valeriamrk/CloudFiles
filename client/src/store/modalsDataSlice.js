import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allModals: [
    {
      id: 1,
      title: "settings",
      opened: false,
    },
    {
      id: 2,
      title: "questions",
      opened: false,
    },
    {
      id: 3,
      title: "buy premium",
      opened: false,
    },
    {
      id: 4,
      title: "info",
      opened: false,
    },
    {
      id: 5,
      title: "upload",
      opened: false,
    },
    {
      id: 6,
      title: "create new folder",
      opened: false,
    },
    {
      id: 7,
      title: "delete",
      opened: false,
    },
    {
      id: 8,
      title: "rename",
      opened: false,
    },

  ],
};

export const modalsDataSlice = createSlice({
  name: "modalsData",
  initialState,
  reducers: {
    changeModalState: (state, action) => {
      state.allModals.map((element) => {
        if (element.id === action.payload.id) {
          element.opened = !action.payload.opened;
        }
        return element;
      });
    },
    changeModalStateClose: (state) => {
      state.allModals.map((element) => {
        element.opened = false;
        return element;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeModalState, changeModalStateClose } = modalsDataSlice.actions;

export default modalsDataSlice.reducer;
