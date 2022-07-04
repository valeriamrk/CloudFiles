import React, { useState } from "react";
import {
  Box,
  Flex,
  PageBasicLayout,
  SearchInput,
  NavigationSidebar,
  MyModal,
  UnderConstruction,
  SidebarRight,
} from "../../components/presentational";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  changeModalState,
  changeModalStateClose,
} from "../../store/modalsDataSlice";

const MainPage = (props) => {
  const {} = props;
  const dispatch = useDispatch();

  const modalsData = useSelector((state) => state.modalsData.allModals);

  const sidebarLinks = useSelector((state) => state.sidebarLinks.sidebarLinks);

  const handleModalState = (id) => {
    dispatch(changeModalState(id));
  };
  const handleModalStateClose = () => {
    dispatch(changeModalStateClose());
  };

  const [popupOpen, setPopupOpen] = useState(false);
  const handlePopupOpen = () => {
    setPopupOpen(!popupOpen);
  };

  const handlePopupFunc = (event) => {
    event.stopPropagation();
    handlePopupOpen();
  };
  return (
    <PageBasicLayout>

      <PageBasicLayout.PageHeader>
        <Box ml={16} width={1}>
          <Flex justifyContent="space-around" alignItems="center">
            <SearchInput />
          </Flex>
        </Box>
      </PageBasicLayout.PageHeader>

      <PageBasicLayout.PageSidebar>
        <NavigationSidebar
          sidebarLinks={sidebarLinks}
          handleModalState={handleModalState}
        />
      </PageBasicLayout.PageSidebar>

      <PageBasicLayout.PageSidebarRight>
        <SidebarRight
          handlePopupOpen={handlePopupOpen}
          handleModalState={handleModalState}
          popupOpen={popupOpen}
          setPopupOpen={setPopupOpen}
          clickButton={(event) => handlePopupFunc(event)}
        />
      </PageBasicLayout.PageSidebarRight>

      <PageBasicLayout.PageContent>
        <Outlet />
      </PageBasicLayout.PageContent>

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
        <div>Help Center</div>
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

    </PageBasicLayout>
  );
};

export { MainPage };
