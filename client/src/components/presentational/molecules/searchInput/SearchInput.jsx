import React, { useState } from "react";
import * as S from "./styles";
import { MyButton } from "../../../presentational";
import { InputField } from "../../../presentational";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";

const SearchInput = (props) => {
  const { inputValue, setInputValue, handleFilter, clearInput } = props;

  return (
    <S.InputItem>
      <InputField
        placeholder="search all you need"
        type="text"
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleFilter={handleFilter}
      />

      {inputValue.length === 0 ? (
        <MyButton>
          <BsSearch />
        </MyButton>
      ) : (
        <MyButton clickButton={() => clearInput()}>
          <MdClear />
        </MyButton>
      )}
    </S.InputItem>
  );
};

export { SearchInput };
