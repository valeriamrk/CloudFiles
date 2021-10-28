import React from "react";
import * as S from "./styles";

const ViewDropdownBtn = () => {
  return (
    <S.Dropdown>
      <S.DropdownBtn>View</S.DropdownBtn>
      <S.DropdownContent>
        <S.DropdownLinks href="#">List</S.DropdownLinks>
        <S.DropdownLinks href="#">Tiles</S.DropdownLinks>
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default ViewDropdownBtn;
