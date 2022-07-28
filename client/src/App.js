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
