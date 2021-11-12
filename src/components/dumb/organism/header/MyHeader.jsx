import React from "react";

import * as S from "./styles";
import MyButton from "../../atoms/MyButton";
import SearchInput from "../../molecules/SearchInput";
import { BsGear, BsQuestionCircle, BsPerson } from "react-icons/bs";


const MyHeader = (props) => {
  

  return (
    <S.Header>
      <div>
        <S.Logo src="https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-18.jpg" alt="logo"/>
      </div>
      <SearchInput />
      <S.BtnRight>
        <MyButton><BsGear/></MyButton>
        <MyButton><BsQuestionCircle/></MyButton>
        <MyButton><BsPerson/></MyButton>
      </S.BtnRight>
    </S.Header>
  );
};

export default MyHeader;
