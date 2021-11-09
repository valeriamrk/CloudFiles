import React from "react";
import * as S from "./styles";
import { BsPlusLg, BsChevronDown } from "react-icons/bs";

const NewFileDropdownBtn = (props) => {
  const { buttonClick, newFileButtonsData } = props;

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>
          <div>
            <BsPlusLg />
          </div>
          <div>New file</div>
          <div><BsChevronDown/></div>
        </S.DropdownBtn>
        <S.DropdownContent>
          {newFileButtonsData.map((element) => (
            <S.DropdownLinks
              onClick={() => handleButtonClick(element.id, element.value)}
              href="#"
            >
              <S.Value>{element.value}</S.Value>
            </S.DropdownLinks>
          ))}
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default NewFileDropdownBtn;
