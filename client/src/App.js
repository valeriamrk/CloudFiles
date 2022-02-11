import {
  UnderConstruction,
} from "./components/presentational";
import { MainContent, RegistrationPage } from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Photos } from "./pages";
import { RecycleBin } from "./pages";
import { SharedFiles } from "./pages";
import { LoginPage } from "./pages";
import { MyModal } from "./components/presentational";
import { useState } from "react";
import { UserCard } from "./components/presentational";
import { MainPage } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import {
  changeModalState,
  changeModalStateClose,
} from "./store/modalsDataSlice";
import { setCurrentDir, setFolders } from "./store/folderCreateSlice";

function App() {
  const isAuth = false;
  const [popupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setPopupOpen(!popupOpen);
  };

  const dispatch = useDispatch();

  const modalsData = useSelector((state) => state.modalsData.allModals);

  const handleModalState = (id) => {
    dispatch(changeModalState(id));
  };
  const handleModalStateClose = () => {
    dispatch(changeModalStateClose());
  };

  const testonclick = () => {
    dispatch(setFolders("test"))
    dispatch(setCurrentDir("test1"))
  }

  return (
    <>
      {isAuth ? (
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  handlePopupOpen={handlePopupOpen}
                  handleModalState={handleModalState}
                />
              }
            >
              <Route path="/allfiles" element={<MainContent />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/sharedfiles" element={<SharedFiles />} />
              <Route path="/recyclebin" element={<RecycleBin />} />
            </Route>
          </Routes>
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
          <button onClick={() => testonclick()}>button</button>
        </div>
      ) : (
        <div className="loginPage">
          {/* <LoginPage /> */}
          <RegistrationPage/>
        </div>
      )}
    </>
  );
}

export default App;
