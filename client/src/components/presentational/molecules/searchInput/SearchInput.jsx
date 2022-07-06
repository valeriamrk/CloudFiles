import React, { useState } from "react";
import * as S from "./styles";
import { MyButton } from "../../../presentational";
import { InputField } from "../../../presentational";
import { BsSearch } from "react-icons/bs";

const SearchInput = (props) => {
  const { inputValue, setInputValue, handleFilter } = props;

  return (
    <S.InputItem>
      <InputField
        placeholder="search all you need"
        type="text"
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleFilter={handleFilter}
      />
      <MyButton headerStyle={"headerStyle"}>
        <BsSearch />
      </MyButton>
    </S.InputItem>
  );
};

export { SearchInput };
