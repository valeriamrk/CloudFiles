import { configureStore } from "@reduxjs/toolkit";
import foldersDataSlice from "./foldersDataSlice";
import modalsDataSlice from "./modalsDataSlice";
import sidebarLinksSlice from "./sidebarLinksSlice";

// test slice
import filesReducerSlice from "./filesSlice";
import authReducerSlice from "./authSlice";

const store = configureStore({
  reducer: {
    foldersData: foldersDataSlice,
    sidebarLinks: sidebarLinksSlice,
    modalsData: modalsDataSlice,
    filesReducer: filesReducerSlice,
    authReducer: authReducerSlice,
  },
});

export default store;
