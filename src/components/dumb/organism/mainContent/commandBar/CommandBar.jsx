import React from "react";
import MyButton from "../../../atoms/MyButton";
import NewFileDropdownBtn from "../../../atoms/NewFileDropdownBtn";
import SortDropdownBtn from "../../../atoms/SortDropdownBtn";
import UploadDropdownBtn from "../../../atoms/UploadDropdownBtn";
import MyDropdownBtn from "../../../atoms/ViewDropdownBtn";
import * as S from "../styles";

const CommandBar = () => {
  return (
    <S.CommandBar>
      <S.RightButtons>
        <NewFileDropdownBtn />
        <UploadDropdownBtn />
      </S.RightButtons>

      <S.LeftButtons>
        <SortDropdownBtn />
        <MyDropdownBtn />
        <MyButton>Info</MyButton>
      </S.LeftButtons>
    </S.CommandBar>
  );
};

export default CommandBar;
