import React from "react";
import * as S from "./styles";

const MyButton = (props) => {
  const { startIcon, endIcon, children, clickButton } = props;

  return (
    <S.MyButton onClick={() => clickButton()}>
      {startIcon && <S.Icons>{startIcon}</S.Icons>}
      <S.Value>{children}</S.Value>
      {endIcon && <S.Icons>{endIcon}</S.Icons>}
    </S.MyButton>
  );
};

export default MyButton;
