import { createSlice } from "@reduxjs/toolkit";
import { BsFolder, BsImage, BsPersonPlus, BsBucket } from "react-icons/bs";


const initialState = {
  sidebarLinks: [
    { path: "/allfiles", label: "All files" },
    { path: "/photos", label: "Photos"},
    { path: "/sharedfiles", label: "Shared files"},
    { path: "/recyclebin", label: "Recycle bin"},
    // { path: "/allfiles", label: "All files", icon: <BsFolder /> },
    // { path: "/photos", label: "Photos", icon: <BsImage /> },
    // { path: "/sharedfiles", label: "Shared files", icon: <BsPersonPlus /> },
    // { path: "/recyclebin", label: "Recycle bin", icon: <BsBucket /> },
  ],
};

export const sidebarLinksSlice = createSlice({
  name: "sidebarLinks",
  initialState,
  reducers: {
  },
});

// Action creators are generated for each case reducer function
// export const {} = sidebarLinksSlice.actions;

export default sidebarLinksSlice.reducer;
