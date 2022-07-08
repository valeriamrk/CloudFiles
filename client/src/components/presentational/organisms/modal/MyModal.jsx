import React, { useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { MyButton } from "../../../presentational";
import * as S from "./styles";

const MyModal = (props) => {
  const { modalActive, handleClose, children } = props;

  return (
    <S.MyModal modalActive={modalActive} onClick={() => handleClose()}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseBtn>
      <MyButton clickButton={() => handleClose()} endIcon={<BsXLg />}>
        </MyButton>
        </S.CloseBtn>
        {children}
      </S.ModalContent>
    </S.MyModal>
  );
};

export { MyModal };
