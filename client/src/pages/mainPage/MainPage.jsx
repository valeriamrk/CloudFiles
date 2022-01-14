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

const MainPage = (props) => {
  const { handleOpen, handlePopupOpen } = props;

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
                clickButton={handleOpen}
                justIcon={"justIcon"}
                headerStyle={"headerStyle"}
              >
                <BsGear />
              </MyButton>
              <MyButton
                clickButton={handleOpen}
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
        <NavigationSidebar sidebarLinks={sidebarLinks}/>
      </PageBasicLayout.PageSidebar>
      <PageBasicLayout.PageContent></PageBasicLayout.PageContent>
    </PageBasicLayout>
  );
};

export { MainPage };
