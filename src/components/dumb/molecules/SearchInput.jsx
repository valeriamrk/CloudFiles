import React, { useState } from "react";
import * as S from "./styles";
import MyButton from "../atoms/MyButton";
import InputField from "../atoms/InputField";
import { BsSearch } from "react-icons/bs";


const SearchInput = (props) => {

  const [valueInput, setValueInput] = useState("");
  console.log({valueInput})

  return (
      <S.InputItem>
        <InputField
          placeholder="search all you need"
          type="text"
          onChange={(e) => setValueInput(e.target.value)}
        />
        <MyButton justIcon={"justIcon"} headerStyle={"headerStyle"}><BsSearch/></MyButton>
      </S.InputItem>
  );
};

export default SearchInput;
