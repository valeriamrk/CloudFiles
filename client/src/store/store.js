import { configureStore } from "@reduxjs/toolkit";
import foldersCreateSlice from "./folderCreateSlice";
import foldersDataSlice from "./foldersDataSlice";
import modalsDataSlice from "./modalsDataSlice";
import sidebarLinksSlice from "./sidebarLinksSlice";

const store = configureStore({
  reducer: {
    foldersData: foldersDataSlice,
    sidebarLinks: sidebarLinksSlice,
    modalsData: modalsDataSlice,
    foldersCreate: foldersCreateSlice,
  },
});

export default store;
