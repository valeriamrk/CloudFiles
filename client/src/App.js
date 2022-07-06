import { Loader, UnderConstruction } from "./components/presentational";
import { MainContent, RegistrationPage } from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Photos } from "./pages";
import { RecycleBin } from "./pages";
import { SharedFiles } from "./pages";
import { LoginPage } from "./pages";
import { MyModal } from "./components/presentational";
import { useEffect, useState } from "react";
import { UserCard } from "./components/presentational";
import { MainPage, PageNotFound } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import {
  changeModalState,
  changeModalStateClose,
} from "./store/modalsDataSlice";
import { authAsync } from "./store/authSlice";

function App() {
  const isAuth = true;
  // const isLoading = useSelector((state) => state.authReducer.loader);

  // const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAsync());
    console.log("AUTH RENDER")
  }, []);

  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<MainPage />}>
          <Route index element={<MainContent />} />
          <Route path="/allfiles" element={<MainContent />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/sharedfiles" element={<SharedFiles />} />
          <Route path="/recyclebin" element={<RecycleBin />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      ) : (
        <Route index element={<LoginPage />} />
        // <Route path="/" element={<LoginPage />} />
        // <Route path="*" element={<NotFound />} />
      )}
    </Routes>
  );
}

export default App;
