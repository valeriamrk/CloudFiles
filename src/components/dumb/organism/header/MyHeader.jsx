import React from "react";

import * as S from "./styles";
import MyButton from "../../atoms/MyButton";
import SearchInput from "../../molecules/SearchInput";

const onSearch = (value) => console.log(value);

const MyHeader = () => {
  return (
    <S.Header>
      <div>
        <S.Logo src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700281-icon-40-clouds-256.png" alt="logo"/>
      </div>
      <SearchInput />
      <S.BtnRight>
        <MyButton>Settings</MyButton>
        <MyButton>Help</MyButton>
        <MyButton>Login</MyButton>
      </S.BtnRight>
    </S.Header>
  );
};

export default MyHeader;
