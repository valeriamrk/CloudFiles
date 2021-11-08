import React from "react";
import { BsCheck2 } from "react-icons/bs";
import * as S from "./styles";

const SortDropdownBtn = (props) => {

  const {buttonClick, sortButtonsData} = props

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>Sort</S.DropdownBtn>
        <S.DropdownContent>
        {sortButtonsData.map((element) => (
          <S.DropdownLinks onClick={() => handleButtonClick(element.id, element.value)} href="#">
          <S.Checked>{element.checked ? <BsCheck2/> : ""}</S.Checked>
          <S.Value>{element.value}</S.Value>
        </S.DropdownLinks>
        ))}
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default SortDropdownBtn;
