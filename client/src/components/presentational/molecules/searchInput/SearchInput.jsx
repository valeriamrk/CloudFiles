import React, { useState } from "react";
import * as S from "./styles";
import { MyButton } from "../../../presentational";
import { InputField } from "../../../presentational";
import { BsSearch } from "react-icons/bs";

const SearchInput = (props) => {
  const [valueInput, setValueInput] = useState("");
  // console.log({valueInput})

  return (
    <S.InputItem>
      <InputField
        placeholder="search all you need"
        type="text"
        onChange={(e) => setValueInput(e.target.value)}
      />
      <MyButton justIcon={"justIcon"} headerStyle={"headerStyle"}>
        <BsSearch />
      </MyButton>
    </S.InputItem>
  );
};

export { SearchInput };
