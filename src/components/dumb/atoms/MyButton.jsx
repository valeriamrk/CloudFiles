import React from "react";
import * as S from "./styles";

const MyButton = (props) => {
  const { startIcon, endIcon, children } = props;

  return (
    <S.MyButton>
      {startIcon && <S.Icons>{startIcon}</S.Icons>}
      <S.Value>{children}</S.Value>
      {endIcon && <S.Icons>{endIcon}</S.Icons>}
    </S.MyButton>
  );
};

export default MyButton;
