import { MyHeader } from "./components/presentational";
import { MainContent } from "./pages";
import { NavigationSidebar } from "./components/presentational";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Photos } from "./pages";
import { RecycleBin } from "./pages";
import { SharedFiles } from "./pages";
import { LoginPage } from "./pages";
import { MyModal } from "./components/presentational";
import { useState } from "react";
import { BsFolder, BsImage, BsPersonPlus, BsBucket } from "react-icons/bs";
import { UserCard } from "./components/presentational";
import { MainPage } from "./pages";

function App() {
  const isAuth = true;
  const [modalActive, setModalActive] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const handleOpen = () => {
    setModalActive(true);
  };
  const handleClose = () => setModalActive(false);

  const handlePopupOpen = () => {
    setPopupOpen(!popupOpen);
  };

  const sidebarRoutes = [
    { path: "/allfiles", label: "All files", icon: <BsFolder /> },
    { path: "/photos", label: "Photos", icon: <BsImage /> },
    { path: "/sharedfiles", label: "Shared files", icon: <BsPersonPlus /> },
    { path: "/recyclebin", label: "Recycle bin", icon: <BsBucket /> },
  ];

  return (
    <>
      {isAuth ? (
        <div className="App">
          {/* <MyHeader handleOpen={handleOpen} handlePopupOpen={handlePopupOpen} />
          <NavigationSidebar sidebarRoutes={sidebarRoutes} /> */}
          {/* <MainPage /> */}
          {/* <div className="main-wrapper"> */}
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route path="/allfiles" element={<MainContent />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/sharedfiles" element={<SharedFiles />} />
              <Route path="/recyclebin" element={<RecycleBin />} />
            </Route>
          </Routes>
          {/* </div> */}
          <MyModal modalActive={modalActive} handleClose={handleClose}>
            <p>lorem</p>
          </MyModal>
          <UserCard popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </div>
      ) : (
        <div className="loginPage">
          <LoginPage />
        </div>
      )}

      {/* <Footer/> */}
    </>
  );
}

export default App;
