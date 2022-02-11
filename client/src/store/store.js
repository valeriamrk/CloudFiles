import { configureStore } from "@reduxjs/toolkit";
import foldersCreateSlice from "./folderCreateSlice";
import foldersDataSlice from "./foldersDataSlice";
import modalsDataSlice from "./modalsDataSlice";
import sidebarLinksSlice from "./sidebarLinksSlice";

// test slice
import testReducer from "./folderSlice";
import  registrationReducer from "./registrationSlice";

const store = configureStore({
  reducer: {
    foldersData: foldersDataSlice,
    sidebarLinks: sidebarLinksSlice,
    modalsData: modalsDataSlice,
    foldersCreate: foldersCreateSlice,
    testReducerName: testReducer,
    registrationReducer: registrationReducer,
  },
});

export default store;
