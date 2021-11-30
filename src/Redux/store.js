import { configureStore } from "@reduxjs/toolkit";
import foldersDataSlice from "./foldersDataSlice";

const store = configureStore({
  reducer: {
    foldersData: foldersDataSlice,
  },
});

export default store;
