import React from "react";
import * as S from "./styles";

const MyButton = (props) => {
  const { startIcon, endIcon, children, clickButton, justIcon, headerStyle } = props;

  return (
    <S.MyButton onClick={() => clickButton()} justIcon={justIcon} headerStyle={headerStyle}> 
      {startIcon && <S.Icons>{startIcon}</S.Icons>}
      <S.Value>{children}</S.Value>
      {endIcon && <S.Icons>{endIcon}</S.Icons>}
    </S.MyButton>
  );
};

export default MyButton;
