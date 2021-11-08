import React, { useState } from "react";
import * as S from "./styles";
import MyButton from "../atoms/MyButton";
import InputField from "../atoms/InputField";

const SearchInput = (props) => {



  return (
      <S.InputItem>
        <InputField
          placeholder="search all you need"
          type="text"
        />
        <MyButton>Search</MyButton>
      </S.InputItem>
  );
};

export default SearchInput;
