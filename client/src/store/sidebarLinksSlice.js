import { createSlice } from "@reduxjs/toolkit";
import { BsFolder, BsImage, BsPersonPlus, BsBucket } from "react-icons/bs";


const initialState = {
  sidebarLinks: [
    { path: "/allfiles", label: "All files", icon: "https://icons-for-free.com/iconfiles/png/512/folder2+folder+file+system-1330021041354943275.png" },
    { path: "/photos", label: "Photos", icon: "https://icons-for-free.com/iconfiles/png/512/image+images+photo+picture+pictures+icon-1320191040579947532.png"},
    { path: "/sharedfiles", label: "Shared files", icon: "https://icons-for-free.com/iconfiles/png/512/folder+multiple-131983800112761360.png"},
    { path: "/recyclebin", label: "Recycle bin", icon: "https://icons-for-free.com/iconfiles/png/512/cancel+delete+garbage+recycle+remove+icon-1320085878741725875.png"},

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
