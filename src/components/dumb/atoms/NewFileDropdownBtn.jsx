import React from "react";
import * as S from "./styles";

const NewFileDropdownBtn = () => {
  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>New file</S.DropdownBtn>
        <S.DropdownContent>
          <S.DropdownLinks href="#">Folder</S.DropdownLinks>
          <S.DropdownLinks href="#">MS Word</S.DropdownLinks>
          <S.DropdownLinks href="#">MS Excel</S.DropdownLinks>
          <S.DropdownLinks href="#">MS PowerPoint</S.DropdownLinks>
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default NewFileDropdownBtn;
