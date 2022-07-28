import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./utils/hooks/useAuth";
import {
  MainPage,
  MainContent,
  SignIn,
  SignUp,
  PageNotFound,
  Photos,
  RecycleBin,
  SharedFiles,
} from "./pages";
import "./App.css";
import { MainContent, RegistrationPage } from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Photos } from "./pages";
import { RecycleBin } from "./pages";
import { SharedFiles } from "./pages";
import { LoginPage } from "./pages";
import { useEffect, useState } from "react";
import { MainPage, PageNotFound } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { authAsync } from "./store/authSlice";

function App() {
  const { isAuth } = useAuth();
  console.log(isAuth)

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
        <Route index element={<SignIn />} />
        // <Route path="/" element={<LoginPage />} />
        // <Route path="*" element={<NotFound />} />
      )}
    </Routes>
  );
}

export default App;
