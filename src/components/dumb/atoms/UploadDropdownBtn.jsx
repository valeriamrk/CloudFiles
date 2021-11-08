import React from "react";
import * as S from "./styles";

const UploadDropdownBtn = (props) => {

  const { buttonClick, uploadFileButtonsData } = props;

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>Upload</S.DropdownBtn>
        <S.DropdownContent>
        {uploadFileButtonsData.map((element) => (
          <S.DropdownLinks onClick={() => handleButtonClick(element.id, element.value)} href="#">
          <S.Value>{element.value}</S.Value>
        </S.DropdownLinks>
        ))}
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default UploadDropdownBtn;
