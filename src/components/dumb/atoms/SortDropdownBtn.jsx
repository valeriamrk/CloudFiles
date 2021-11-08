import React from "react";
import * as S from "./styles";

const SortDropdownBtn = (props) => {
  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>Sort</S.DropdownBtn>
        <S.DropdownContent>
          <S.DropdownLinks href="#">A-Z</S.DropdownLinks>
          <S.DropdownLinks href="#">Z-A</S.DropdownLinks>
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default SortDropdownBtn;
