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
import { authAsync } from "./store/authSlice";

function App() {
  // const isAuth = true;
  // const isLoading = useSelector((state) => state.authReducer.loader);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authAsync());
  }, []);

  // const showContent = (isLoading) => {
  //   if (!isLoading) {
  //     return (
  //       <div className="App">
  //           <MyRoutes
  //             handlePopupOpen={handlePopupOpen}
  //             handleModalState={handleModalState}
  //           />
  //           {/* </div> */}
  //           <MyModal
  //             modalActive={modalsData[0].opened}
  //             handleClose={handleModalStateClose}
  //             modalsData={modalsData}
  //           >
  //             <div>Settings</div>
  //             <UnderConstruction />
  //           </MyModal>

  //           <MyModal
  //             modalActive={modalsData[1].opened}
  //             handleClose={handleModalStateClose}
  //             modalsData={modalsData}
  //           >
  //             <div>Questions</div>
  //             <UnderConstruction />
  //           </MyModal>

  //           <MyModal
  //             modalActive={modalsData[2].opened}
  //             handleClose={handleModalStateClose}
  //             modalsData={modalsData}
  //           >
  //             <div>Buy Premium Cloud</div>
  //             <UnderConstruction />
  //           </MyModal>
  //           <UserCard popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
  //         </div>
  //     )
  //   } else {
  //     return (
  //       <Loader/>
  //     )
  //   }
  // }

  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<MainPage />}>
          <Route index element={<MainContent />} />
          <Route path="/allfiles" element={<MainContent />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/sharedfiles" element={<SharedFiles />} />
          <Route path="/recyclebin" element={<RecycleBin />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      ) : (
        <Route index element={<LoginPage />} />
        // <Route path="/" element={<LoginPage />} />
        // <Route path="*" element={<NotFound />} />
      )}
    </Routes>
    // <>
    //   {isAuth ? (
    //     <div className="App">
    //       <Routes>
    //         <Route
    //           path="/"
    //           element={
    //             <MainPage
    //               handlePopupOpen={handlePopupOpen}
    //               handleModalState={handleModalState}
    //             />
    //           }
    //         >
    //           <Route path="/allfiles" element={<MainContent />} />
    //           <Route path="/photos" element={<Photos />} />
    //           <Route path="/sharedfiles" element={<SharedFiles />} />
    //           <Route path="/recyclebin" element={<RecycleBin />} />
    //         </Route>
    //       </Routes>
    //       {/* </div> */}
    //       <MyModal
    //         modalActive={modalsData[0].opened}
    //         handleClose={handleModalStateClose}
    //         modalsData={modalsData}
    //       >
    //         <div>Settings</div>
    //         <UnderConstruction />
    //       </MyModal>

    //       <MyModal
    //         modalActive={modalsData[1].opened}
    //         handleClose={handleModalStateClose}
    //         modalsData={modalsData}
    //       >
    //         <div>Questions</div>
    //         <UnderConstruction />
    //       </MyModal>

    //       <MyModal
    //         modalActive={modalsData[2].opened}
    //         handleClose={handleModalStateClose}
    //         modalsData={modalsData}
    //       >
    //         <div>Buy Premium Cloud</div>
    //         <UnderConstruction />
    //       </MyModal>
    //       <UserCard popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
    //     </div>
    //   ) : (
    //     <div className="loginPage">
    //       <LoginPage />
    //       {/* <RegistrationPage/> */}
    //     </div>
    //   )}
    // </>
  );
}

export default App;
