import React from 'react'
import * as S from "./styles";


const MyButton = ({ children, ...props }) => {
  return (
    <div>
      <S.MyButton {...props}>{children}</S.MyButton>
    </div>
  )
}

export default MyButton
