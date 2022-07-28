import React from "react";
import * as S from "./styles";

const StyledCheckbox = (props) => {
  const { checkFile, checked, id, ...other } = props;

  const changeCheckbox = (id, checked) => {
    checkFile(id, checked);
  };
  return (
    <S.CheckboxContainer>
      <S.HiddenCheckbox
        checked={checked}
        {...other}
        onChange={() => changeCheckbox(id, checked)}
      />
      <S.StyledCheckbox checked={checked}>
        <S.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </S.Icon>
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

export { StyledCheckbox };
