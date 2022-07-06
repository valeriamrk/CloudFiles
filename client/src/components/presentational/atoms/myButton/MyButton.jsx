import React from "react";
import * as S from "./styles";

const MyButton = (props) => {
  const {
    startIcon,
    endIcon,
    children,
    clickButton,
    ...other
  } = props;

  return (
    <S.MyButton
      onClick={clickButton && ((event) => clickButton(event))}
      {...other}
    >
      {startIcon && <S.Icons>{startIcon}</S.Icons>}
      <S.Value>{children}</S.Value>
      {endIcon && <S.Icons>{endIcon}</S.Icons>}
    </S.MyButton>
  );
};

export { MyButton };
