import { MyHeader } from "./components/presentational";
import {MainContent} from "./pages";
import { NavigationSidebar } from "./components/presentational";
import "./App.css";
import { Route } from "react-router";
import {Photos} from "./pages";
import {RecycleBin} from "./pages";
import {SharedFiles} from "./pages";
import {LoginPage} from "./pages";
import { MyModal } from "./components/presentational";
import { useState } from "react";
import { BsFolder, BsImage, BsPersonPlus, BsBucket } from "react-icons/bs";
import {UserCard} from "./components/presentational";

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
          <MyHeader handleOpen={handleOpen} handlePopupOpen={handlePopupOpen} />
          <NavigationSidebar sidebarRoutes={sidebarRoutes} />
          <div className="main-wrapper">
            <Route path="/allfiles" render={() => <MainContent />} />
            <Route path="/photos" render={Photos} />
            <Route path="/sharedfiles" render={SharedFiles} />
            <Route path="/recyclebin" render={RecycleBin} />
          </div>
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
