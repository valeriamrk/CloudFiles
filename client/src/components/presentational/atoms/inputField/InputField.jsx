import React from "react";
import * as S from "./styles";

const InputField = (props) => {
  const { inputValue, setValue, handleFilter, ...other } = props;

  return (
    <S.InputField
      {...other}
      value={inputValue}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export { InputField };
