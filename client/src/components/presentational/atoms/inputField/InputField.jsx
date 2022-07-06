import React from "react";
import * as S from "./styles";

const InputField = (props) => {
  const {inputValue, setInputValue, handleFilter, ...other} = props

  return (
      <S.InputField {...other} value={inputValue}
      onChange={handleFilter} />
  );
};

export { InputField };
