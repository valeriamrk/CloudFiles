import React, { useState } from "react";
import * as S from "./styles";
import MyButton from "../atoms/MyButton";
import InputField from "../atoms/InputField";
import { BsSearch } from "react-icons/bs";


const SearchInput = (props) => {



  return (
      <S.InputItem>
        <InputField
          placeholder="search all you need"
          type="text"
        />
        <MyButton><BsSearch/></MyButton>
      </S.InputItem>
  );
};

export default SearchInput;
