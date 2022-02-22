import React, { useState } from "react";
import {
  Box,
  Flex,
  MyButton,
  PageBasicLayout,
  SearchInput,
  Logo,
  NavigationSidebar,
  MyModal,
  UnderConstruction,
  UserCard,
} from "../../components/presentational";
import { BsGear, BsQuestionCircle, BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { changeModalState, changeModalStateClose } from "../../store/modalsDataSlice";

const MainPage = (props) => {
  const {} = props;
  const dispatch = useDispatch();

  const modalsData = useSelector((state) => state.modalsData.allModals);

  const sidebarLinks = useSelector(
    (state) => state.sidebarLinks.sidebarLinks
  );

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
          <Flex justifyContent="space-between" alignItems="center">
            <Logo />
            <SearchInput />

            <Flex alignItems="center">
              <MyButton
                clickButton={() => handleModalState({id: 1})}
                justIcon={"justIcon"}
                headerStyle={"headerStyle"}
              >
                <BsGear />
              </MyButton>
              <MyButton
                clickButton={() => handleModalState({id: 2})}
                justIcon={"justIcon"}
                headerStyle={"headerStyle"}
              >
                <BsQuestionCircle />
              </MyButton>
              <MyButton
                clickButton={(event) => handlePopupFunc(event)}
                justIcon={"justIcon"}
                headerStyle={"headerStyle"}
              >
                <BsPerson />
              </MyButton>
            </Flex>
          </Flex>
        </Box>
      </PageBasicLayout.PageHeader>
      <PageBasicLayout.PageSidebar>
        <NavigationSidebar sidebarLinks={sidebarLinks} handleModalState={handleModalState}/>
      </PageBasicLayout.PageSidebar>
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

    </PageBasicLayout>
  );
};

export { MainPage };
