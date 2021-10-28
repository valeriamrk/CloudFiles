import React from "react";
import * as S from "./styles";

const UploadDropdownBtn = () => {
  return (
    <div>
      <S.Dropdown>
        <S.DropdownBtn>Upload</S.DropdownBtn>
        <S.DropdownContent>
          <S.DropdownLinks href="#">Files</S.DropdownLinks>
          <S.DropdownLinks href="#">Folder</S.DropdownLinks>
        </S.DropdownContent>
      </S.Dropdown>
    </div>
  );
};

export default UploadDropdownBtn;
