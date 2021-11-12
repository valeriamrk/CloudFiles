import React from "react";
import * as S from "./styles";
import { BsPlusLg, BsChevronDown, BsPlusSquare } from "react-icons/bs";

const NewFileDropdownBtn = (props) => {
  const { buttonClick, newFileButtonsData } = props;

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>
          <S.Icons>
            <BsPlusSquare />
          </S.Icons>
          <div>New file</div>
          <S.Icons><BsChevronDown/></S.Icons>
        </S.DropdownBtn>
        <S.DropdownContent>
          {newFileButtonsData.map((element) => (
            <S.DropdownListItem
              onClick={() => handleButtonClick(element.id, element.value)}
              href="#"
            >
              <S.Value>{element.value}</S.Value>
            </S.DropdownListItem>
          ))}
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default NewFileDropdownBtn;
