import React from "react";
import * as S from "./styles";
import { BsUpload, BsChevronDown } from "react-icons/bs";

const UploadDropdownBtn = (props) => {
  const { buttonClick, uploadFileButtonsData } = props;

  const handleButtonClick = (id, value) => {
    buttonClick(id, value);
  };

  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>
          {" "}
          <S.Icons>
            <BsUpload />
          </S.Icons>
          <div>Upload</div>
          <S.Icons>
            <BsChevronDown />
          </S.Icons>
        </S.DropdownBtn>
        <S.DropdownContent>
          {uploadFileButtonsData.map((element) => (
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

export default UploadDropdownBtn;
