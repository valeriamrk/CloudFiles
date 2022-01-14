import React, { useRef, useState } from "react";
import * as S from "./styles";

const MyModal = (props) => {
  // const {children } = props
  const { modalActive, handleClose, children } = props;

  // const [modalActive, setModalActive] = useState(false);
  // const handleOpen = () => {
  //   setModalActive(true);
  // };
  // const handleClose = () => setModalActive(false);

  return (
    <S.MyModal modalActive={modalActive} onClick={() => handleClose()}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.MyModal>
  );
};

export { MyModal };
