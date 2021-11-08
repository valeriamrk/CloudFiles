import React from "react";
import * as S from "./styles";
import { BsCheck2 } from "react-icons/bs";

const ViewDropdownBtn = (props) => {
  const { buttonClick, dropdownButtonsData } = props;

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <S.Dropdown>
      <S.DropdownBtn>View</S.DropdownBtn>
      <S.DropdownContent>
        {dropdownButtonsData.map((element) => (
          <S.DropdownLinks onClick={() => handleButtonClick(element.id, element.value)} href="#">
          <S.Checked>{element.checked ? <BsCheck2/> : ""}</S.Checked>
          <S.Value>{element.value}</S.Value>
        </S.DropdownLinks>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default ViewDropdownBtn;
