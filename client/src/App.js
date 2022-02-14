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
import { MainPage } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import {
  changeModalState,
  changeModalStateClose,
} from "./store/modalsDataSlice";
import { setCurrentDir, setFolders } from "./store/folderCreateSlice";
import { authAsync } from "./store/authSlice";
import MyRoutes from "./routes/MyRoutes";

function App() {
  // const isAuth = false;

  const isAuth = useSelector((state) => state.authReducerName.isAuth);
  const isLoading = useSelector((state) => state.authReducerName.loader);

  const [popupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setPopupOpen(!popupOpen);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authAsync());
  }, []);

  const modalsData = useSelector((state) => state.modalsData.allModals);

  const handleModalState = (id) => {
    dispatch(changeModalState(id));
  };
  const handleModalStateClose = () => {
    dispatch(changeModalStateClose());
  };

  const testonclick = () => {
    dispatch(setFolders("test"));
    dispatch(setCurrentDir("test1"));
  };


  const showContent = (isLoading) => {
    if (!isLoading) {
      return (
        <div className="App">
            <MyRoutes
              handlePopupOpen={handlePopupOpen}
              handleModalState={handleModalState}
            />
            {/* </div> */}
            <MyModal
              modalActive={modalsData[0].opened}
              handleClose={handleModalStateClose}
              modalsData={modalsData}
            >
              <div>Settings</div>
              <UnderConstruction />
            </MyModal>
  
            <MyModal
              modalActive={modalsData[1].opened}
              handleClose={handleModalStateClose}
              modalsData={modalsData}
            >
              <div>Questions</div>
              <UnderConstruction />
            </MyModal>
  
            <MyModal
              modalActive={modalsData[2].opened}
              handleClose={handleModalStateClose}
              modalsData={modalsData}
            >
              <div>Buy Premium Cloud</div>
              <UnderConstruction />
            </MyModal>
            <UserCard popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
          </div>
      )
    } else {
      return (
        <Loader/>
      )
    }
  } 


  return (
    <>
      {isAuth ? (
        showContent(isLoading)
      ) : (
        <div className="loginPage">
          <LoginPage />
          {/* <RegistrationPage/> */}
        </div>
      )}
    </>
  );
}

export default App;
