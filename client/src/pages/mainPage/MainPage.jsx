import React from "react";
import {
  Box,
  Flex,
  MyButton,
  PageBasicLayout,
  SearchInput,
  Logo,
  NavigationSidebar,
} from "../../components/presentational";
import { BsGear, BsQuestionCircle, BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainPage = (props) => {
  const { handleOpen, handlePopupOpen, handleModalState } = props;

  const sidebarLinks = useSelector(
    (state) => state.sidebarLinks.sidebarLinks
  );

  const handlePopupFunc = (event) => {
    event.stopPropagation();
    handlePopupOpen();
  };
  return (
    <PageBasicLayout>
      <PageBasicLayout.PageHeader>
        <Box ml={16}>
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
    </PageBasicLayout>
  );
};

export { MainPage };
