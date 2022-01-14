import { configureStore } from "@reduxjs/toolkit";
import foldersDataSlice from "./foldersDataSlice";
import sidebarLinksSlice from "./sidebarLinksSlice";

const store = configureStore({
  reducer: {
    foldersData: foldersDataSlice,
    sidebarLinks: sidebarLinksSlice,
  },
});

export default store;
