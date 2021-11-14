import React, { useState } from "react";

import * as S from "./styles";
import MyButton from "../../atoms/MyButton";
import SearchInput from "../../molecules/SearchInput";
import { BsGear, BsQuestionCircle, BsPerson } from "react-icons/bs";
import MyModal from "../modal/MyModal";


const MyHeader = (props) => {
  
  const {handleOpen} = props

  return (
    <S.Header>
      <div>
        <S.Logo src="https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-18.jpg" alt="logo"/>
      </div>
      <SearchInput />
      <S.BtnRight>
        <MyButton clickButton={handleOpen}><BsGear/></MyButton>
        <MyButton><BsQuestionCircle/></MyButton>
        <MyButton><BsPerson/></MyButton>
      </S.BtnRight>
    </S.Header>
  );
};

export default MyHeader;
