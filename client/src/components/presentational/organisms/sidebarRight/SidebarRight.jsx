import React from "react";
import { InfoBlock, UserCard } from "../../../presentational";
import { Flex } from "../../templates/flex/Flex.styled";

const SidebarRight = (props) => {
  const {
    handleModalState,
    handlePopupOpen,
    popupOpen,
    setPopupOpen,
    clickButton,
  } = props;
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <UserCard
        handlePopupOpen={handlePopupOpen}
        handleModalState={handleModalState}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        clickButton={clickButton}
      />
      <InfoBlock handleModalState={handleModalState} />
    </Flex>
  );
};

export { SidebarRight };
