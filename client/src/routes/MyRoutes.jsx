import React from 'react'
import { Routes, Route } from "react-router-dom";
import { MainContent, MainPage, Photos, RecycleBin, SharedFiles } from '../pages';


const MyRoutes = (props) => {

  const {handlePopupOpen, handleModalState} = props

  return (
    <Routes>
    <Route
      path="/"
      element={
        <MainPage
          handlePopupOpen={handlePopupOpen}
          handleModalState={handleModalState}/>
      }>
      <Route path="/allfiles" element={<MainContent />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/sharedfiles" element={<SharedFiles />} />
      <Route path="/recyclebin" element={<RecycleBin />} />
    </Route>
  </Routes>

  )
}

export default MyRoutes