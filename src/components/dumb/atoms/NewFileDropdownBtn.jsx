import React from "react";
import * as S from "./styles";

const NewFileDropdownBtn = (props) => {

  const { buttonClick, newFileButtonsData } = props;

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };
  
  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>New file</S.DropdownBtn>
        <S.DropdownContent>
        {newFileButtonsData.map((element) => (
          <S.DropdownLinks onClick={() => handleButtonClick(element.id, element.value)} href="#">
          <S.Value>{element.value}</S.Value>
        </S.DropdownLinks>
        ))}
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default NewFileDropdownBtn;
