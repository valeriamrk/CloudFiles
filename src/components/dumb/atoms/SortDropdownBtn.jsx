import React from "react";
import { BsCheck2 } from "react-icons/bs";
import * as S from "./styles";
import { BsSortDown, BsChevronDown, BsPlusSquare } from "react-icons/bs";


const SortDropdownBtn = (props) => {

  const {buttonClick, sortButtonsData} = props

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>          <S.Icons>
            <BsSortDown />
          </S.Icons>
          <div>Sort</div>
          <S.Icons><BsChevronDown/></S.Icons>
</S.DropdownBtn>
        <S.DropdownContent>
        {sortButtonsData.map((element) => (
          <S.DropdownListItem onClick={() => handleButtonClick(element.id, element.value)} href="#">
          <S.Checked>{element.checked ? <BsCheck2/> : ""}</S.Checked>
          <S.Value>{element.value}</S.Value>
        </S.DropdownListItem>
        ))}
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default SortDropdownBtn;
