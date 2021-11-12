import React from "react";
import * as S from "./styles";
import { BsCheck2, BsGrid, BsChevronDown } from "react-icons/bs";

const ViewDropdownBtn = (props) => {
  const { buttonClick, viewButtonsData } = props;

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <S.Dropdown>
      <S.DropdownBtn>
        <BsGrid />
        <S.Icons>
          <BsChevronDown />
        </S.Icons>
      </S.DropdownBtn>
      <S.DropdownContent>
        {viewButtonsData.map((element) => (
          <S.DropdownListItem
            onClick={() => handleButtonClick(element.id, element.value)}
            href="#"
          >
            <S.Checked>{element.checked ? <BsCheck2 /> : ""}</S.Checked>
            <S.Value>{element.value}</S.Value>
          </S.DropdownListItem>
        ))}
      </S.DropdownContent>
    </S.Dropdown>
  );
};

export default ViewDropdownBtn;
