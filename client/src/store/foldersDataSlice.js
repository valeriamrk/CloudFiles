import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFolders: [
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
      modified: "18/11/2021",
      size: "200Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
      modified: "19/11/2021",
      size: "220Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
      modified: "17/11/2021",
      size: "250Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 4,
      title: "non esse culpa molestiae omnis sed optio",
      modified: "16/11/2021",
      size: "100Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 5,
      title: "eaque aut omnis a",
      modified: "14/11/2021",
      size: "500Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 6,
      title: "natus impedit quibusdam illo est",
      modified: "15/11/2021",
      size: "270Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 7,
      title: "quibusdam autem aliquid et et quia",
      modified: "20/11/2021",
      size: "600Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 8,
      title: "qui fuga est a eum",
      modified: "21/11/2021",
      size: "800Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 9,
      title: "saepe unde necessitatibus rem",
      modified: "23/11/2021",
      size: "20Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 10,
      title: "distinctio laborum qui",
      modified: "22/11/2021",
      size: "300Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 11,
      title: "distinctio laborum qui",
      modified: "22/11/2021",
      size: "300Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 12,
      title: "distinctio laborum qui",
      modified: "22/11/2021",
      size: "300Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 13,
      title: "distinctio laborum qui",
      modified: "22/11/2021",
      size: "300Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 14,
      title: "distinctio laborum qui",
      modified: "22/11/2021",
      size: "300Mb",
      checked: false,
    },
    {
      userId: 1,
      id: 15,
      title: "distinctio laborum qui",
      modified: "22/11/2021",
      size: "300Mb",
      checked: false,
    },
  ],
};

// const initialState = {
  
// }

export const foldersDataSlice = createSlice({
  name: "foldersData",
  initialState,
  reducers: {
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
});

// Action creators are generated for each case reducer function
export const { checkOneFile, uncheckAllFiles } = foldersDataSlice.actions;

export default foldersDataSlice.reducer;
