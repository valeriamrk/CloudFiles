
import React, { useState } from 'react'
import * as S from "./styles"

const MyModal = (props) => {

  const {modalActive, handleClose, children } = props


  return (
    <S.MyModal modalActive={modalActive} onClick={() => handleClose()}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </S.ModalContent>
    </S.MyModal>
  )
}

export default MyModal
