import React from "react";
import { MyButton } from "../..";
import * as S from "./styles";
import { BsChevronDown } from "react-icons/bs";
import { UserCardMenu } from "./UserCardMenu";

const UserCard = (props) => {
  const {
    handlePopupOpen,
    handleModalState,
    popupOpen,
    setPopupOpen,
    clickButton,
  } = props;

  return (
    <S.MainContainer>
      <S.ContentWrapper>
        <S.Avatar
          src="https://static.vecteezy.com/system/resources/previews/000/420/940/original/avatar-icon-vector-illustration.jpg"
          alt="avatar"
        />
        <S.UserInfo>
          <S.UsernameContent>User Name</S.UsernameContent>
          <S.Description>Active user</S.Description>
        </S.UserInfo>
        <S.Icon onClick={() => handlePopupOpen()}>
          <BsChevronDown />
        </S.Icon>
      </S.ContentWrapper>
      <UserCardMenu
        handlePopupOpen={handlePopupOpen}
        handleModalState={handleModalState}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        clickButton={clickButton}
      />
    </S.MainContainer>
  );
};

export { UserCard };
