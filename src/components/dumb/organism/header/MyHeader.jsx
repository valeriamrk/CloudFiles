import React from "react";

import * as S from "./styles";
import MyButton from "../../atoms/MyButton";
import SearchInput from "../../molecules/SearchInput";

const MyHeader = (props) => {
  

  return (
    <S.Header>
      <div>
        <S.Logo src="https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-18.jpg" alt="logo"/>
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
