import React, { useState } from "react";

import * as S from "./styles";
import { MyButton } from "../../../presentational";
import { SearchInput } from "../../../presentational";
import { BsGear, BsQuestionCircle, BsPerson } from "react-icons/bs";
import { MyModal } from "../../../presentational";

const MyHeader = (props) => {
  const { handleOpen, handlePopupOpen } = props;

  const handlePopupFunc = (event) => {
    event.stopPropagation();
    handlePopupOpen();
  };

  return (
    <S.Header>
      <S.LeftContainer>
        <S.Logo
          src="https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-18.jpg"
          alt="logo"
        />
      </S.LeftContainer>
      <S.CenterContainer>
        <SearchInput />
      </S.CenterContainer>
      <S.RightContainer>
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
      </S.RightContainer>
    </S.Header>
  );
};

export { MyHeader };
