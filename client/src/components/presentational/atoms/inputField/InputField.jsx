import React from "react";
import * as S from "./styles";

const InputField = (props) => {
  return (
      <S.InputField {...props}  onChange={(event) => props.setValue(event.target.value)}  />
  );
};

export { InputField };
