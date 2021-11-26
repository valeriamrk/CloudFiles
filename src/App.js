import MyHeader from "./components/dumb/organism/header/MyHeader";
import MainContent from "./components/dumb/organism/mainContent/MainContent";
import NavigationSidebar from "./components/dumb/organism/navigationSidebar/NavigationSidebar";
import "./App.css";
import { Route } from "react-router";
import Photos from "./components/pages/Photos";
import RecycleBin from "./components/pages/RecycleBin";
import SharedFiles from "./components/pages/SharedFiles";
import LoginPage from "./components/pages/LoginPage";
import MyModal from "./components/dumb/organism/modal/MyModal";
import { useState } from "react";
import { BsFolder, BsImage, BsPersonPlus, BsBucket } from "react-icons/bs";


function App() {
  const isAuth = true;
  const [modalActive, setModalActive] = useState(false);
  const handleOpen = () => {
    setModalActive(true);
  };
  const handleClose = () => setModalActive(false);
  

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
          <MyHeader handleOpen={handleOpen} />
          <NavigationSidebar sidebarRoutes={sidebarRoutes}/>
          <div className="main-wrapper">
            <Route path="/allfiles" render={() => <MainContent />} />
            <Route path="/photos" render={Photos} />
            <Route path="/sharedfiles" render={SharedFiles} />
            <Route path="/recyclebin" render={RecycleBin} />
          </div>
          <MyModal modalActive={modalActive} handleClose={handleClose}><p>lorem</p></MyModal>
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
