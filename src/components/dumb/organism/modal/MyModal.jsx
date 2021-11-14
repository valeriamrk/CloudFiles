
import React, { useState } from 'react'
import * as S from "./styles"
import "./MyModal.module.css"

const MyModal = (props) => {

  const {modalActive, handleClose } = props


  return (
    <S.MyModal modalActive={modalActive} onClick={() => handleClose()}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        content
      </S.ModalContent>
    </S.MyModal>
  )
}

export default MyModal
